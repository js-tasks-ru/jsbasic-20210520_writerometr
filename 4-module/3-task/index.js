function highlight(table) {
  for (let x = 1; x < table.rows.length; x++) {
     let age = table.rows[x].cells[1];
     let gender = table.rows[x].cells[2];
     let status = table.rows[x].cells[3];
     /*Настройка раздела 'Status'*/ 
     let StatusInfo = status.dataset.available;
     let statusResult =  status.parentElement;
     if (StatusInfo === 'true') {
      statusResult.classList.add('available');}
      if (StatusInfo === 'false') {
         statusResult.classList.add('unavailable');}
         if (StatusInfo === undefined) {statusResult.hidden = true;}
      /*Настройка раздела 'Gender'*/
      let genderInfo = gender.textContent;
      let genderResult = gender.parentElement;
      if (genderInfo === 'm') {
         genderResult.classList.add('male')}
         if (genderInfo === 'f') {
         genderResult.classList.add('female')}
      /*Настройка раздела 'Age'*/
      let ageInfo = Number(age.textContent);
      let ageResult = age.parentElement;
      if (ageInfo < 18) {
         ageResult.style ="text-decoration: line-through"}
  }
}