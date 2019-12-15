console.log('js');

$(document).ready(readyNow)

let salaries = [];

function readyNow() {
    console.log('jq');
    // click to run addEmployee
    $('#addEmployeeButton').on('click', addEmployee);
    // click to run removeEmployee
    $('#employeeList').on('click', '.deleteButton', removeEmployee);

    // add employee function
    function addEmployee() {
        // console.log('addEmployeeButton clicked');
        // get user input
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let employeeNumber = $('#employeeNumber').val();
        let employeePosition = $('#employeePosition').val();
        let employeeSalary = $('#employeeSalary').val();
        // convert strings to number values
        employeeNumber = Number(employeeNumber);
        employeeSalary = Number(employeeSalary);

        let employee = {
            firstName: firstName,
            lastName: lastName,
            employeeNumber: employeeNumber,
            employeePosition: employeePosition,
            employeeSalary: employeeSalary
        }
        
        console.log(firstName, lastName, employeeNumber, employeePosition, employeeSalary);

        // append collected input values to table body of the DOM
        $('#employeeList').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeNumber}</td>
            <td>${employeePosition}</td>
            <td>${employeeSalary}</td>
            <td><button class="deleteButton">delete?</button></td>
        </tr>
        `);

        // empty inputs on the DOM using setter
        $('#firstName').val('');
        $('#lastName').val('');
        $('#employeeNumber').val('');
        $('#employeePosition').val('');
        $('#employeeSalary').val('');

        function makeNewEmployee() {            
            let employee = {};
            employee.firstName = firstName;
            employee.lastName = lastName;
            employee.number = employeeNumber;
            employee.position = employeePosition;
            employee.employeeSalary
        }
        makeNewEmployee();
        
        salaries.push(employee.employeeSalary);
        console.log(salaries);

        function totalMonthlyBudget() {
            console.log('inside totalMonthlyBudget');
            let monthlyBudget = 0;
            console.log(monthlyBudget);
            for (let i = 0; i < salaries.length; i++) {
                monthlyBudget += salaries[i] / 12;
                console.log(monthlyBudget);
            }
            return monthlyBudget;
        }
        totalMonthlyBudget();
    }

    // remove employee function
    function removeEmployee() {
        console.log('in removeEmployee function');
        $(this).closest('tr').remove();
    }
}

// loop through the user-generated Array
// add the collected values and divide them by 12 to achieve monthly budget
// append the sum to the DOM
// if statement the color of the value to turn red when over 20000 by assigning it a unique class