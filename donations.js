/// RAW DATA

var ciwf = {
  "name": "Compassion In World Farming USA",
  "desc": "Corporate animal welfare advocacy",
  "link": "https://www.ciwf.com/"
}

var sci = {
  "name": "Schistosomiasis Control Initiative",
  "desc": "Funds mass deworming programs in countries with high infection rates",
  "link": "http://www.imperial.ac.uk/schistosomiasis-control-initiative",
  "evidence": "http://www.givewell.org/international/technical/programs/deworming",
}

var thl = {
  "name": "The Humane League",
  "desc": "Farmed animal advocacy",
  "link": "http://www.thehumaneleague.com/"
}

var amf = {
  "name": "Against Malaria Foundation",
  "desc": "Distributes insecticide-treated bed nets with assistance from local distributors",
  "link": "https://www.againstmalaria.com",
  "evidence": "http://www.givewell.org/international/technical/programs/insecticide-treated-nets"
}

var gd = {
  "name": "GiveDirectly",
  "desc": "Funds one-time unconditional direct cash transfers to low-income individuals in Kenya",
  "link": "https://givedirectly.com",
  "evidence": "https://www.givedirectly.org/research-at-give-directly",
}

var lmh = {
  "name": "Last Mile Health",
  "desc": "Trains & funds individuals to provide healthcare in communities with low access to other healthcare providers",
  "link": "http://lastmilehealth.org/"
}

var gw_regrant = {
  "name": "GiveWell (regrant)",
  "desc": "Fund for GiveWell to redistribute to its top charities",
  "link": "http://www.givewell.org/"
}

var dwb = {
  "name": "Doctors Without Borders",
  "desc": "Sends doctors to areas in need of healthcare providers",
  "link": "http://www.doctorswithoutborders.org/"
}

var donations = [
{
  "year": 2017,
  "income": 0,
  "donations": [
    {
      "date": new Date(2017, 0, 6),
      "amount": 10.73,
      "organization": thl,
      "notes": "Offsetting animal products in a free lunch"
    },
    {
      "date": new Date(2017, 0, 16),
      "amount": 100.0,
      "organization": ciwf
    }
  ]
},
{
  "year": 2016,
  "income": 20863.64,
  "donations": [
    {
      "date": new Date(2016, 11, 28),
      "amount": 250.0,
      "organization": sci,
    },
    {
      "date": new Date(2016, 11, 28),
      "amount": 355.0,
      "organization": amf,
    },
    {
      "date": new Date(2016, 10, 11),
      "amount": 210.19,
      "organization": gd,
      "notes": "For a donation matching fundraiser"
    },
    {
      "date": new Date(2016, 10, 9),
      "amount": 393.0,
      "organization": gd,
      "notes": "For a donation matching fundraiser"
    },
    {
      "date": new Date(2016, 9, 4),
      "amount": 40.0,
      "organization": lmh,
      "notes": "Do not currently recommend donating to this organization"
    },
    {
      "date": new Date(2016, 7, 15),
      "amount": 750.0,
      "organization": gw_regrant,
    },
    {
      "date": new Date(2016, 5, 5),
      "amount": 100.0,
      "organization": gd,
    },
    {
      "date": new Date(2016, 5, 4),
      "amount": 75.0,
      "organization": dwb,
      "notes": "Do not currently recommend donating to this organization"
    }
  ]
}
]
