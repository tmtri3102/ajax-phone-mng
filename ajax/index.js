

function addNewSmartPhone() {
    event.preventDefault();
    // lay gia tri tu casc input
    let producer = $('#producer').val();
    let model = $('#model').val();
    let price = $('#price').val();
    let newSmartPhone = {

        // tao doi tuong json
        producer: producer,
        model: model,
        price: price
    };
    // goi ajax
    $.ajax(
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(newSmartPhone),
            type: "POST",
            // ten API
            url: "http://localhost:8080/api/smartphones/",
            // xu ly khi success
            success: function (){
                successHandler();
                console.log("success");
            }
        }
    );



}

function successHandler() {
    $.ajax(
        {
            type: "GET",
            url: "http://localhost:8080/api/smartphones",
            success: function (data) {
                let content = ' <table id="display-list" border="1"><tr>\n' +
                    ' <th>Producer</td>\n' +
                    ' <th>Model</td>\n' +
                    ' <th>Price</td>\n' +
                    ' <th>Delete</td>\n' +
                    ' </tr>';
                for (let i = 0; i < data.length; i++) {
                    content += getSmartphone(data[i]);

                }
                content += "</table>"
                document.getElementById('smartphoneList').innerHTML = content;
                document.getElementById('smartphoneList').style.display = "block";
                document.getElementById('add-smartphone').style.display = "none";
                document.getElementById('display-create').style.display = "block";
                document.getElementById('title').style.display = "block";
            }
        }
    )
}

function getSmartphone(smartphone) {
    return `<tr>
                <td >${smartphone.producer}</td>
                <td >${smartphone.model}</td>
                <td >${smartphone.price}</td>
                <td class="btn">
                    <button class="deleteSmartphone" onclick="deleteSmartphone(${smartphone.id})">Delete</button>
                </td>
            </tr>`;
}

function deleteSmartphone(id) {
    $.ajax({
        type: "DELETE",
        //tên API
        url: `http://localhost:8080/api/smartphones/${id}`,
        //xử lý khi thành công
        success: successHandler
    });
}

function displayFormCreate() {
    document.getElementById('smartphoneList').style.display = "none";
    document.getElementById('add-smartphone').style.display = "block";
    document.getElementById('display-create').style.display = "none";
    document.getElementById('title').style.display = "none";
}

// function addNewSmartPhone() {
//     event.preventDefault();
//
//     let producer = $('#producer').val();
//     let model = $('#model').val();
//     let price = $('#price').val();
//     let newSmartphone = {
//         producer: producer,
//         model: model,
//         price: price
//     };
//
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         type: "POST",
//         data: JSON.stringify(newSmartphone),
//         url: "http://localhost:8080/api/smartphones",
//         // success: function() {
//         //     console.log("success");
//         //     listAllSmartPhones();
//         // }
//         success: listAllSmartPhones,
//         error: function(xhr, status, error) {
//             console.error("Lỗi khi gửi yêu cầu:", status, error);
//             console.log("Chi tiết lỗi:", xhr.responseText);
//             alert("Lỗi xảy ra: " + xhr.status + " - " + xhr.statusText);
//         }
//     });
// }
//
// function listAllSmartPhones() {
//     event.preventDefault();
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/api/smartphones",
//         success: function (data) {
//             let content = ' <table id="display-list" border="1"><tr>\n' +
//                 ' <th>Producer</th>\n' +
//                 ' <th>Model</th>\n' +
//                 ' <th>Price</th>\n' +
//                 ' <th>Delete</th>\n' +
//                 ' </tr>';
//             for (let i = 0; i < data.length; i++) {
//                 content += `<tr>
//                 <td>${data[i].producer}</td>
//                 <td>${data[i].model}</td>
//                 <td>${data[i].price}</td>
//                 <td><button type="button" onclick="deleteSmartphone(${data[i].id})">Delete</button></td>
//                 </tr>`;
//             }
//             content += "</table>";
//             $("#smartphoneList").html(content);
//         }
//     });
// }
//
// function deleteSmartphone(id) {
//     $.ajax({
//         type: "DELETE",
//         url: `http://localhost:8080/api/smartphones/${id}`,
//         success: function() {
//             listAllSmartPhones();
//         }
//     });
// }
