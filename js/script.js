function buildYearDropdownList () {
  const yearDropdown = document.getElementById('year-dropdown');

  const maxYear = 2480;
  const currentYear = new Date().getFullYear() - 8;
  const minYear = 1970;

  for (let i = maxYear; i >= minYear; --i) {
    const dateOption = document.createElement('option');
    dateOption.textContent = i;
    dateOption.value = i;
    yearDropdown.add(dateOption);
  }

  yearDropdown.value = currentYear;
}

buildYearDropdownList();

// const currentYear = new Date().getFullYear() - 8;
// console.log(currentYear);

// const currentMonth = new Date().getMonth();
// console.log(currentMonth);
