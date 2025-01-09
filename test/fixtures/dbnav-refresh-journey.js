const dbNavJourney = {
	journey: {
		type: 'journey',
		legs: [
			{
				origin: {
					type: 'station',
					id: '8000105',
					name: 'Frankfurt(Main)Hbf',
					location: {
						type: 'location',
						id: '8000105',
						latitude: 50.106815,
						longitude: 8.663003,
					},
				},
				destination: {
					type: 'station',
					id: '8000240',
					name: 'Mainz Hbf',
					location: {
						type: 'location',
						id: '8000240',
						latitude: 50.00124,
						longitude: 8.258453,
					},
				},
				departure: '2025-01-03T17:56:00+01:00',
				plannedDeparture: '2025-01-03T17:56:00+01:00',
				departureDelay: null,
				arrival: '2025-01-03T18:30:00+01:00',
				plannedArrival: '2025-01-03T18:30:00+01:00',
				arrivalDelay: null,
				tripId: '2|#VN#1#ST#1735585219#PI#1#ZI#888642#TA#1#DA#30125#1S#8000105#1T#1756#LS#8000007#LT#1921#PU#81#RT#1#CA#DPN#ZE#29266#ZB#RB 29266#PC#3#FR#8000105#FT#1756#TO#8000007#TT#1921#',
				line: {
					type: 'line',
					id: 'rb-31-29266',
					fahrtNr: '29266',
					name: 'RB 31 (29266)',
					public: true,
					productName: 'RB',
					mode: 'train',
					product: 'regional',
					adminCode: 'V6RB__',
					operator: {
						type: 'operator',
						id: 'vlexx',
						name: 'vlexx',
					},
				},
				direction: 'Alzey',
				arrivalPlatform: '6a',
				plannedArrivalPlatform: '6a',
				departurePlatform: '18',
				plannedDeparturePlatform: '18',
				remarks: [
					{
						text: 'Number of bicycles conveyed limited',
						type: 'hint',
						code: 'bicycle-conveyance',
						summary: 'bicycles conveyed',
					},
					{
						text: 'Behindertengerechtes Fahrzeug',
						type: 'hint',
						code: 'barrier-free-vehicle',
						summary: 'barrier-free vehicle',
					},
					{
						text: 'power sockets for laptop',
						type: 'hint',
						code: 'power-sockets',
						summary: 'power sockets available',
					},
					{
						text: 'air conditioning',
						type: 'hint',
						code: 'air-conditioned',
						summary: 'air-conditioned vehicle',
					},
				],
			},
			{
				origin: {
					type: 'station',
					id: '8000240',
					name: 'Mainz Hbf',
					location: {
						type: 'location',
						id: '8000240',
						latitude: 50.00124,
						longitude: 8.258453,
					},
				},
				destination: {
					type: 'station',
					id: '8000240',
					name: 'Mainz Hbf',
					location: {
						type: 'location',
						id: '8000240',
						latitude: 50.00124,
						longitude: 8.258453,
					},
				},
				departure: '2025-01-03T18:30:00+01:00',
				plannedDeparture: '2025-01-03T18:30:00+01:00',
				departureDelay: null,
				arrival: '2025-01-03T18:30:00+01:00',
				plannedArrival: '2025-01-03T18:30:00+01:00',
				arrivalDelay: null,
				public: true,
				walking: true,
				distance: null,
			},
			{
				origin: {
					type: 'station',
					id: '8000240',
					name: 'Mainz Hbf',
					location: {
						type: 'location',
						id: '8000240',
						latitude: 50.00124,
						longitude: 8.258453,
					},
				},
				destination: {
					type: 'station',
					id: '8000096',
					name: 'Stuttgart Hbf',
					location: {
						type: 'location',
						id: '8000096',
						latitude: 48.785053,
						longitude: 9.182589,
					},
				},
				departure: '2025-01-03T18:42:00+01:00',
				plannedDeparture: '2025-01-03T18:42:00+01:00',
				departureDelay: null,
				arrival: '2025-01-03T20:23:00+01:00',
				plannedArrival: '2025-01-03T20:23:00+01:00',
				arrivalDelay: null,
				tripId: '2|#VN#1#ST#1735585219#PI#1#ZI#193906#TA#0#DA#30125#1S#8010085#1T#845#LS#8000141#LT#2130#PU#81#RT#1#CA#IC#ZE#2048#ZB#IC  2048#PC#1#FR#8010085#FT#845#TO#8000141#TT#2130#',
				line: {
					type: 'line',
					id: 'ic-2048',
					fahrtNr: '2048',
					name: 'IC 2048',
					public: true,
					productName: 'IC',
					mode: 'train',
					product: 'national',
					adminCode: '80____',
					operator: {
						type: 'operator',
						id: 'db-fernverkehr-ag',
						name: 'DB Fernverkehr AG',
					},
				},
				direction: 'Tübingen Hbf',
				arrivalPlatform: '13',
				plannedArrivalPlatform: '13',
				departurePlatform: '5a/b',
				plannedDeparturePlatform: '5a/b',
				remarks: [
					{
						text: 'Komfort Check-in possible (visit bahn.de/kci for more information)',
						type: 'hint',
						code: 'komfort-checkin',
						summary: 'Komfort-Checkin available',
					},
					{
						text: 'Bicycles conveyed - subject to reservation',
						type: 'hint',
						code: 'bicycle-conveyance-reservation',
						summary: 'bicycles conveyed, subject to reservation',
					},
					{
						text: 'Number of bicycles conveyed limited',
						type: 'hint',
						code: 'bicycle-conveyance',
						summary: 'bicycles conveyed',
					},
					{
						text: 'Food and beverages served at seat',
						type: 'hint',
						code: 'snacks',
						summary: 'snacks available for purchase at the seat',
					},
					{
						code: 'RZ',
						summary: 'Einstieg mit Rollstuhl stufenfrei',
						text: 'Einstieg mit Rollstuhl stufenfrei',
						type: 'hint',
					},
					{
						text: 'Intercity 2: visit www.bahn.de/ic2 for more information',
						type: 'hint',
						code: 'intercity-2',
						summary: 'Intercity 2',
					},
				],
				loadFactor: 'high',
			},
		],
		refreshToken: 'T$A=1@O=Frankfurt(Main)Hbf@X=8663785@Y=50107149@L=8000105@a=128@$A=1@O=Mainz Hbf@X=8258723@Y=50001113@L=8000240@a=128@$202501031756$202501031830$RB 29266$$1$$$$$$§T$A=1@O=Mainz Hbf@X=8258723@Y=50001113@L=8000240@a=128@$A=1@O=Stuttgart Hbf@X=9181636@Y=48784081@L=8000096@a=128@$202501031842$202501032023$IC  2048$$1$$$$$$',
		remarks: [],
		price: {
			amount: 43.99,
			currency: 'EUR',
			hint: null,
		},
		tickets: [
			{
				name: 'Super Sparpreis',
				priceObj: {
					amount: 4399,
					currency: 'EUR',
				},
				firstClass: false,
				partialFare: false,
				addDataTicketInfo: 'Train-specific travel. No cancellations. No City-Ticket',
				addDataTicketDetails: 'You can use all trains indicated on your ticket. Your ticket constitutes a continuous contract of carriage in each direction (through ticket). Should you make a passenger rights claim, the ticket will be considered in its entirety. Special rules apply to tickets including City-Ticket, see there. Your ticket cannot be cancelled. Your ticket does not include a City-Ticket. The City-Ticket is issued together with your Super Sparpreis or Sparpreis ticket, depending on the journey you have booked.',
			},
			{
				name: 'Super Sparpreis',
				priceObj: {
					amount: 5299,
					currency: 'EUR',
				},
				firstClass: true,
				partialFare: false,
				addDataTicketInfo: 'Train-specific travel. No cancellations. No City-Ticket. No access to the DB Lounge',
				addDataTicketDetails: 'You can use all trains indicated on your ticket. Your ticket constitutes a continuous contract of carriage in each direction (through ticket). Should you make a passenger rights claim, the ticket will be considered in its entirety. Special rules apply to tickets including City-Ticket, see there. Your ticket cannot be cancelled. Your ticket does not include a City-Ticket. The City-Ticket is issued together with your Super Sparpreis or Sparpreis ticket, depending on the journey you have booked. Your ticket does not entitle you to use the DB Lounge.',
				addDataTravelInfo: 'Travel 1st class',
			},
			{
				name: 'Sparpreis',
				priceObj: {
					amount: 5099,
					currency: 'EUR',
				},
				firstClass: false,
				partialFare: false,
				addDataTicketInfo: 'Train-specific travel. Cancellation subject to a fee before first day of validity. No City-Ticket',
				addDataTicketDetails: 'You can use all trains indicated on your ticket. Your ticket constitutes a continuous contract of carriage in each direction (through ticket). Should you make a passenger rights claim, the ticket will be considered in its entirety. Special rules apply to tickets including City-Ticket, see there. You can cancel your ticket up to and including 02.01.2025 for a fee of EUR 10,00. You will receive a voucher for the remaining amount. No cancellation thereafter. Your ticket does not include a City-Ticket. The City-Ticket is issued together with your Super Sparpreis or Sparpreis ticket, depending on the journey you have booked.',
			},
			{
				name: 'Sparpreis',
				priceObj: {
					amount: 6199,
					currency: 'EUR',
				},
				firstClass: true,
				partialFare: false,
				addDataTicketInfo: 'Train-specific travel. Cancellation subject to a fee before first day of validity. No City-Ticket. No access to the DB Lounge',
				addDataTicketDetails: 'You can use all trains indicated on your ticket. Your ticket constitutes a continuous contract of carriage in each direction (through ticket). Should you make a passenger rights claim, the ticket will be considered in its entirety. Special rules apply to tickets including City-Ticket, see there. You can cancel your ticket up to and including 02.01.2025 for a fee of EUR 10,00. You will receive a voucher for the remaining amount. No cancellation thereafter. Your ticket does not include a City-Ticket. The City-Ticket is issued together with your Super Sparpreis or Sparpreis ticket, depending on the journey you have booked. Your ticket does not entitle you to use the DB Lounge.',
				addDataTravelInfo: 'Travel 1st class',
			},
			{
				name: 'Flexpreis',
				priceObj: {
					amount: 5550,
					currency: 'EUR',
				},
				firstClass: false,
				partialFare: false,
				addDataTicketInfo: 'Unrestricted choice of trains. Cancellation. City-Ticket',
				addDataTicketDetails: 'Your IC/EC ticket lets you use any Intercity or Eurocity train as well as regional and local trains. Your ticket constitutes a continuous contract of carriage in each direction (through ticket). Should you make a passenger rights claim, the ticket will be considered in its entirety. Special rules apply to tickets including City-Ticket; see there. You can cancel your ticket free of charge up to and including 26.12.2024. After that, cancellation is available for a fee of EUR 10,00 until 02.01.2025 and from 03.01.2025 for a fee of EUR 30,00. Your ticket includes a City-Ticket for Frankfurt(Main), Stadtgebiet Frankfurt ohne Flughafen (Tarifgebiet 50 ohne Flughafen) and Stuttgart, Stadtgebiet Stuttgart (Tarifzone 1, ehemals Zone 10 und 20). The City-Ticket is valid in conjunction with your long-distance ticket only when you use it for connecting services in local or regional rail passenger transport (e.g. S-Bahn, RE and RB trains) as part of the through ticket. The City-Ticket is issued together with your Super Sparpreis or Sparpreis ticket, depending on the journey you have booked.',
			},
			{
				name: 'Flexpreis',
				priceObj: {
					amount: 10270,
					currency: 'EUR',
				},
				firstClass: true,
				partialFare: false,
				addDataTicketInfo: 'Unrestricted choice of trains. Cancellation. City-Ticket. Access to the DB Lounge. Seat included',
				addDataTicketDetails: 'Your IC/EC ticket lets you use any Intercity or Eurocity train as well as regional and local trains. Your ticket constitutes a continuous contract of carriage in each direction (through ticket). Should you make a passenger rights claim, the ticket will be considered in its entirety. Special rules apply to tickets including City-Ticket; see there. You can cancel your ticket free of charge up to and including 26.12.2024. After that, cancellation is available for a fee of EUR 10,00 until 02.01.2025 and from 03.01.2025 for a fee of EUR 30,00. Your ticket includes a City-Ticket for Frankfurt(Main), Stadtgebiet Frankfurt ohne Flughafen (Tarifgebiet 50 ohne Flughafen) and Stuttgart, Stadtgebiet Stuttgart (Tarifzone 1, ehemals Zone 10 und 20). The City-Ticket is valid in conjunction with your long-distance ticket only when you use it for connecting services in local or regional rail passenger transport (e.g. S-Bahn, RE and RB trains) as part of the through ticket. The City-Ticket is issued together with your Super Sparpreis or Sparpreis ticket, depending on the journey you have booked. Your ticket entitles you to use the DB Lounge. Your ticket includes a free seat reservation.',
				addDataTravelInfo: 'Travel 1st class',
			},
		],
	},
	realtimeDataUpdatedAt: null,
};

export {
	dbNavJourney,
};
