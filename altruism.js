function makeYearDesc(year) {
  td = document.createElement('td');
  td.innerHTML = `<p>${year.year}</p>`;
  td.innerHTML += `<small>Income: $${year.income.toLocaleString()}</p>`;
  td.innerHTML += `<small>Donations: $${getTotalDonations(year)}</p>`;
  td.setAttribute('rowspan', year.donations.length);
  return td;
}

function makeYear(year) {
  table = document.getElementById('donations-log')
  outer_row = document.createElement('tr');
  outer_row.appendChild(makeYearDesc(year));

  donations = year.donations;
  donations.sort(function(a, b){
    if(a.date < b.date) return -1;
    if(b.date > a.date) return 1;
    return 0;
  });

  outer_row = addDonationData(outer_row, donations[0]);
  table.appendChild(outer_row);
  if (donations.length > 1) {
    for (i = 1; i < donations.length; i++) {
      tr = document.createElement('tr');
      table.appendChild(addDonationData(tr, donations[i]))
    }
  }
}

function getTotalDonations(year) {
  donations = year.donations;
  total = 0;
  for (i = 0; i < donations.length; i++) {
    total += donations[i].amount;
  }
  return total;
}

function addDonationData(row, donation) {
  row.innerHTML += `<td>${donation.date.getMonth() + 1}-${donation.date.getDate()}</td>`;
  row.innerHTML += `<td>${orgHTML(donation.organization)}</td>`
  row.innerHTML += `<td>$${donation.amount.toLocaleString()}</td>`
  row.innerHTML += `<td>${donation.notes ? donation.notes : ""}</td>`
  return row;
}

function orgHTML(org) {
  return `<a href=${org.link} target="_blank">${org.name}</a>`
}
