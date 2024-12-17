import {parse} from 'qs';

const POI = 'POI';
const STATION = 'ST';
const ADDRESS = 'ADR';

const leadingZeros = /^0+/;

const parseLocation = (ctx, l) => {
	const {profile} = ctx;

	if (!l) {
		return null;
	}

	const lid = parse(l.id, {delimiter: '@'});
	const res = {
		type: 'location',
		id: (l.extId || lid.L || l.evaNumber || l.evaNo || '').replace(leadingZeros, '') || null,
	};
	const name = l.name || lid.O;

	if (l.lat && l.lon) {
		res.latitude = l.lat;
		res.longitude = l.lon;
	} else if ('X' in lid && 'Y' in lid) {
		res.latitude = lid.Y / 1000000;
		res.longitude = lid.X / 1000000;
	}

	if (l.type === STATION || l.extId || l.evaNumber || l.evaNo || lid.A == 1) {
		const stop = {
			type: 'stop', // TODO station
			id: res.id,
			name: name,
			location: 'number' === typeof res.latitude
				? res
				: null, // todo: remove `.id`
		};
		// TODO subStops

		if ('products' in l) {
			stop.products = profile.parseProductsBitmask(ctx, l.products);
		}

		// TODO isMeta
		// TODO station
		// TODO entrances, lines, transitAuthority, dhid, ids
		return stop;
	}

	res.name = name;
	if (l.type === ADDRESS || lid.A == 2) {
		res.address = name;
	}
	if (l.type === POI || lid.A == 4) {
		res.poi = true;
	}

	return res;
};

export {
	parseLocation,
};
