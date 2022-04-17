var c = 0, sum = 0, avg = 0, arr = [];



function addStudent() {
    if (!localStorage.getItem('lista')) {
    }
    else {
        let fname = document.getElementById("studentname");
        let grade = document.getElementById("grade");

        let table1 = document.getElementById("tbdy");
        let avarege = document.getElementById("avg");
        let cnt = document.getElementById("counter");



        if (fname.value != "" && fname.value != null && grade.value != "" && grade.value != null) {

            c++;
            cnt.innerHTML = c;
            sum += parseInt(grade.value);
            avg = sum / c;


            avarege.innerHTML = avg;

            let ele1 = document.createElement("label");
            let ele2 = document.createElement("label");

            let ele3 = document.createElement("td");
            let ele4 = document.createElement("td");

            let ele5 = document.createElement("tr");


            ele1.textContent = fname.value;
            ele2.textContent = grade.value;



            ele3.appendChild(ele1);
            ele4.appendChild(ele2);

            ele5.appendChild(ele3);
            ele5.appendChild(ele4);


            table1.appendChild(ele5);


        
            var obj = {
                student_name: fname.value,
                student_grade: grade.value,
                classAvg: avg,
                classCounter: c
            };
            arr.push(obj);
            localStorage.setItem('lista', JSON.stringify(arr));
            fname.value = " ";
            grade.value = " ";

        }

        else {
            alert("enter again");
        }
    }
}