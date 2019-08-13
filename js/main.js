let listUser = [
    { member_id: 14514615, password: 14514615 },
    { member_id: 22982331, password: 22982331 },
    { member_id: 182508463, password: 182508463 },
    { member_id: 184733438, password: 184733438 },
    { member_id: 232768376, password: 232768376 }
];

function getLogin() {
    let memberid = document.getElementById('memberid').value;
    let pass = document.getElementById('password').value;
    let succss = document.getElementById("msglog");
    for ( let i = 0; i < listUser.length; i++) {
        if (memberid == listUser[i].member_id && pass == listUser[i].password) {
            succss.innerHTML = `<span class="alert alert-success" role="alert"> You are logged in successfully </span>`;
            setTimeout(function () { location.href = './index.html'; }, 2000);
            sessionStorage.setItem("membersid", memberid);
            return;
        }
    }
    succss.innerHTML = `<span class="alert alert-danger" role="alert"> Incorrect your Member ID or Password </span>`;

}

window.onload = function () {let allset = document.getElementById("result").innerHTML = `Member ID:  ${sessionStorage.getItem("membersid")}`;
}

let dataUser = new Request("./data/data.json")
fetch(dataUser)
    .then(function (resp) {
        return resp.json();
    })

    .then(function (data) {
        let listTabel = document.getElementById("currentuser");
        for (i = 0; i < data.length; i++) {
            for (let j = 0; j < Object.keys(data[i].member_id).length; j++) {
                if (data[i].member_id[j] == sessionStorage.getItem("membersid")) {
                    listTabel.innerHTML = listTabel.innerHTML + ` 
                    <div class="mb-3">
                    <ul class="list-group list-group-flush card shadow-sm p-2 ">
                    <li class="list-group-item"> <b>Member ID :</b> ${data[i].member_id[j]} </li>
                    <li class="list-group-item"><b>Member Name	 :</b> ${data[i].member_name[j]}</li>
                    <li class="list-group-item"> <b>Bio :</b> ${data[i].bio[j]}</li>
                    <li class="list-group-item"> <b>Home Town : </b>${data[i].hometown[j]}</li>
                    </ul>
                     </div>
                `
                }
            }
        }
    }
    );



//joined groups

let all_data_joined_groups = new Request("./data/all_data_joined_groups.json");

fetch(all_data_joined_groups)
    .then(function (resp) {
        return resp.json();
    })

    .then(function (data) {
        let listTabel = document.getElementById("groupids");
        for (i = 0; i < data.length; i++) {
           
                if (data[i].member_id == sessionStorage.getItem("membersid")) {
                    listTabel.innerHTML = listTabel.innerHTML + ` <tr>
                <td>${data[i].group_id}</td>
                <td>${data[i].group_name}</td>
                <td>${data[i].members}</td>
                <td>${data[i].description}</td>
                
                </tr>
                `
                }
            
        }
    });



   //Members fatch-all

   let members_json = new Request("./data/members.json");

   fetch( members_json)
       .then(function (resp) {
           return resp.json();
       })
   
       .then(function (data) {
           let listTabel = document.getElementById("members_json");
           for (i = 0; i < data.length; i++) {
                listTabel.innerHTML = listTabel.innerHTML + `
                <div class="mb-3">
                 <ul class="list-group list-group-flush card shadow-sm p-2 ">
                   <li class="list-group-item"> <b>Member ID :</b> ${data[i].member_id}</li>
                   <li class="list-group-item"> <b>Member Name : </b> ${data[i].member_name}</li>
                   <li class="list-group-item"> <b>Bio : </b>${data[i].group_id}</li>
                   <li class="list-group-item"> <b>	Home Town : </b> ${data[i].members}</li>
                   <li class="text-center mt-3">   
                   
                    <div class="text-center">
                       <a href="javascript: void(0)" class="btn mr-3 like"><i class="material-icons"> thumb_up </i> </a>
                       <a href="javascript: void(0)" class="btn dislike"><i class="material-icons"> thumb_down </i> </a>
                     </div>
                   
                    </li>
                   
                   </ul>
                   </div>
   
                   `
                 }
       });




    //Groups

let other_recommdations_json = new Request("./data/groups_new_for_demo.json");

fetch(other_recommdations_json)
    .then(function (resp) {
        return resp.json();
    })

    .then(function (data) {
        let listTabel = document.getElementById("other_recommdation");
        for (i = 0; i < data.length; i++) {
             listTabel.innerHTML = listTabel.innerHTML + `
             <div class="mb-3">
              <ul class="list-group list-group-flush card shadow-sm p-2 ">
                <li class="list-group-item"> <b>Group ID :</b> ${data[i].group_id}</li>
                <li class="list-group-item"> <b>Group Name : </b> ${data[i].group_name}</li>
                <li class="list-group-item"> <b>Members : </b> ${data[i].members}</li>
                <li class="list-group-item"> <b>Decription : </b>${data[i].description}</li>
               
                <li class="text-center mt-3"> 
                 <div class="text-center">
                       <a href="javascript: void(0)" class="btn mr-3 like"><i class="material-icons"> thumb_up </i> </a>
                       <a href="javascript: void(0)" class="btn dislike"><i class="material-icons"> thumb_down </i> </a>
                     </div>
                   
                </li>
                 </ul>
                </div>

                `
           }
    });

//featured_groups

let featured_groups = new Request("./data/featured_groups.json");

fetch(featured_groups)
    .then(function (resp) {
        return resp.json();
    })

    .then(function (data) {
        let listTabel = document.getElementById("featured_groups");

        for (i = 0; i < data.length; i++) {
                if (data[i].member_id == sessionStorage.getItem("membersid")) {
                    listTabel.innerHTML = listTabel.innerHTML + ` <div class="mb-4">
                    <ul class="list-group list-group-flush card shadow-sm p-2 ">
                    <li class="list-group-item"> <b> Group ID : </b> ${data[i].group_id}</li>
                    <li class="list-group-item"> <b> Group Name :</b> ${data[i].group_name}</li>
                    <li class="list-group-item"> <b> Members : </b> ${data[i].members}</li>
                    <li class="list-group-item"> <b> Decription : </b> ${data[i].description}</li>
                   
                    <li class="text-center mt-3">   
                    
                    <div class="text-center">
                       <a href="javascript: void(0)" class="btn mr-3 like"><i class="material-icons"> thumb_up </i> </a>
                       <a href="javascript: void(0)" class="btn dislike"><i class="material-icons"> thumb_down </i> </a>
                     </div>
                    
                    </li>
                </ul>
                </div>
                `
                }
            
        }
    });

  
    document.querySelector('body').addEventListener('click', (e)=> {
            $(".like").click(function(){
            $(this).addClass("greencolor");
          });

          $(".dislike").click(function(){
            $(this).addClass("redcolor");
          });
       
        
    });


    
  
//page 1

function membersDDL(currenJoined) {
   
    let fgroups = new Request("./data/featured_groups.json");
    fetch(fgroups)
    .then(function (resp) {
        return resp.json();
    })

    .then(function (data) {
        let listTabel = document.getElementById("currentJntG");
        var notFound = document.getElementById("currentJntG");
                notFound.innerHTML = "";

        for (i = 0; i < data.length; i++) {
                if (data[i].member_id == currenJoined) {
                    listTabel.innerHTML = listTabel.innerHTML + ` <tr>
                <td>${data[i].group_id}</td>
                <td>${data[i].group_name}</td>
                <td>${data[i].members}</td>
                <td>${data[i].description}</td>
                
                </tr>`
               return true;
            }
          }
        notFound();
    });
  

    // top fives
   
 let top_five = new Request("./data/tops.json");
 fetch(top_five)
 .then(function (resp) {
     return resp.json();
 })

 .then(function (data) {
     let listTabel = document.getElementById("memerRecom");
     for (let i = 0; i < data.length; i++) {
          if (currenJoined == data[i].users_A ) {
            
         listTabel.innerHTML = ` <tr>
         <td>${data[i].users_A}</td>
         <td>${data[i].top1}</td>
         <td>${data[i].top2}</td>
         <td>${data[i].top3}</td>
         <td>${data[i].top4}</td>
         <td>${data[i].top5}</td>
         </tr> ` 
        
         }
         
     };
    
});
};

//other recommadation

let other_recommdation = new Request("./data/other_recommdation.json");

fetch(other_recommdation)
    .then(function (resp) {
        return resp.json();
    })

    .then(function (data) {
        let listTabel = document.getElementById("otherRecomID");
        for (i = 0; i < data.length; i++) {
                listTabel.innerHTML = listTabel.innerHTML + ` <tr>
                <td>${data[i].member_id}</td>
                <td>${data[i].member_name}</td>
                <td>${data[i].group_id}</td>
                <td>${data[i].group_name}</td>
                <td>${data[i].members}</td>
                  </tr>
                `
             }
    });
 


 




