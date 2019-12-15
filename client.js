console.log('js');

$(document).ready(readyNow)

function readyNow() {
    console.log('jq');
    // click to run addEmployee
    $('#addEmployeeButton').on('click', addEmployee);
    // click to run removeEmployee
    $('#employeeList').on('click', '.deletbutton', removeEmployee);

    // add employee function
    function addEmployee() {
        console.log('addEmployeeButton clicked');
        // get user input
        let firstName = $('#firstName').valueOf();
        let lastName = $('#lastName').valueOf();
        let employeeNumber = $('#number').valueOf();
        let employeePosition = $('#position').valueOf();
        let employeeSalary = $('#salary').valueOf();
        // convert strings to number values
        employeeNumber = Number(employeeNumber);
        employeeSalary = Number(employeeSalary);

        console.log(firstName, lastName, employeeNumber, employeePosition, employeeSalary);

        // append collected input values to table body of the DOM
        $('#employeeList').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeNumber}</td>
            <td>${employeePosition}</td>
            <td>${employeeSalary}</td>
            <td><button>delete?</button></td>
        </tr>
        `);

        // empty inputs on the DOM using setter
        $('#firstName').valueOf('');
        $('#lastName').valueOf('');
        $('#emploeeNumber').valueOf('');
        $('#employeePosition').valueOf('');
        $('#employeeSalary').valueOf('');

    }

    // remove employee function
    function removeEmployee() {
        console.log('in removeEmployee function');
        $(this).closest('tr').remove();
    }


}
