

<template>
    <div @getGroupList="getDetails">
        <div class="Container">
            <div class="ChatList">
                <div class="header" >
                <HeaderComponent @getFilter="getfiltername" :data="user" ></HeaderComponent></div>
                <div id="scroll" >
                    <GroupList  v-for="(x,index) in Group" :key="index" :data="x"></GroupList>
                <!-- </div> -->
                </div>
            </div>   
            <div class="ChatSection" id="ChatSec">

                <div><ChatHeader :detail="data_value"></ChatHeader></div>
                <div class="SubSection" id="SubSec">
                    <div id="scroll"> 
                            <div class="messg" v-for="(i,index) in RetrieveMessage" :key="index" >
                               <!-- <h>{{RetrieveUserDetails.mobilenum}}</h> -->
                                <div id="lazy" :class="(i.senderid==RetrieveUserDetails.mobilenum)?'Right':'Left'"> <h6 :class="(i.senderid==RetrieveUserDetails.mobilenum)?'number1':'number2'">{{i.senderid}}</h6><h6>{{i.messagetext}}</h6></div>
                            
                        </div>

                    </div>
                </div>

                <footer class="message" >
                    <input type="file" ref="files" round class="change-profile-image" @change="handleFilesUpload()" id="file" />
                    <!-- <div style="left:-455px;position: relative;top:90px;">
                         <button style="position: relative;top:-100px;height:25px;width: 15px;" @click="addFiles()"> 
                        </button> -->
                
                   <div id="upload" style="left:-420px;position: relative;top:42px;"><button style="position: relative;top:-50px;height:25px;width: 20px;" @click="submitFiles()">U</button></div>
                   <i id="attachment" class="fa fa-paperclip" aria-hidden="true"></i>

                    <!-- <i id="image" class="fa fa-picture-o" aria-hidden="true"></i> -->

                    <input id="msg" type="text" v-model="message" placeholder="Enter a message">
                    <i id="send" @click="sendMessage" class="fa fa-paper-plane" aria-hidden="true"></i>
                </footer>

            </div> 

        </div>
        

    </div>

</template>
<script type="text/javascript" charset="utf-8" src= "../components/js/GroupChatList.js" >

// import $ from 'jQuery'

// // var page = 2;

// var isLoading = false;

// function loadNewPage() {
//   var temp = $(document).height();
//     // page++;
//     $(".ChatSection").prepend('<div id="lazy"></div>');
//     $(document).scrollTop($(document).height()-temp);
//     isLoading = false;
// }

// $(document).scroll(function() {
//   if($(document).scrollTop() < 60 && !isLoading) {
//     isLoading = true;
//     setTimeout(loadNewPage, 1200);
//   }
  
// });


// $(document).scrollTop($(document).height());

// const fileInput = document.querySelector("#file1");
// console.log(fileInput)

// const uploadFile = file => {
//   console.log("Uploading file...");
// //   const API_ENDPOINT = `/two/upload`;
// //   const request = new XMLHttpRequest();
//   const formData = new FormData();

// //   request.open("POST", API_ENDPOINT, true);
// //   request.onreadystatechange = () => {
// //     if (request.readyState === 4 && request.status === 200) {
// //       console.log(request.responseText);
// //     }
// //   };
//   formData.append("file", file);
//   axios.post(`/two/upload`,formData)

// //   request.send(formData);
// }

// fileInput.addEventListener("change", event => {
//   const files = event.target.files;
//   uploadFile(files[0]);
// });



</script>
<style scoped>


.Container {
        position: relative;
        top: -5px;
        left: -10px;
        display: grid;
        position:fixed;
        grid-template-columns: 30% 70%;
        background-color: white;
        border: 2px solid black;
        height: max-content;
        padding: 10px;
        grid-auto-rows: fit-content;
        grid-gap: 1px;
        width: 98%;
        left: 1px;
    }
 h1 
 {
    color: black;
 }   
 .Right
 {
    position: relative;
    right: 70px;
    text-align: right;
    /* border: 1px solid black; */
    padding: 0px 30px 0px 30px;  
    background-color: white ; 
    width: max-content;
    margin-left: 800px;
    margin-bottom: 75px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;



 }
 
 .Left
 {
    position: relative;
    left: 70px;
    text-align: left;
    border-radius: 5px;
    width: max-content;
    /* border: 1px solid black; */
    padding: 0px 30px 0px 30px;   
    background-color: white ; 
    
    margin-right: 800px;
    margin-bottom: 75px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
 }
 .number1
 {
    position: relative;
    top: 5px;
    right:-20px;
 }
 .number2
 {
    position: relative;
    top: 5px;
    left:-20px;
 }

 #file
 {
    position:relative;
    left:-10px;
    border: 1px solid black; 
    width: 20px;
    left: -445px;

    top:16px;
 }
 #file::-webkit-file-upload-button
 {
    visibility: hidden;
 }
#file::before {
  /* content: 'Select some files'; */
  /* display: inline-block; */
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  /* padding: 5px 8px; */
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  /* font-weight: 700; */
  /* font-size: 10pt; */
}
#file::before {
  border-color: black;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

 #attachment
 {
    position: absolute;
    width: 100px;
    height: 30px;
    left: 0px;
    top: 20px;
 } 
 #image
 {
    position: absolute;
    width: 100px;
    height: 30px;
    left: 30px;
    top: 20px;
 } 
 #send
 {
    position:relative;
    left: 400px;
    top: -27px;
 } 

 .ChatSection
 {
    margin-left: 0px;
    /* background : url('https://c4.wallpaperflare.com/wallpaper/792/639/808/pattern-monochrome-telegram-logo-cats-hd-wallpaper-thumb.jpg'); */
    background-color:#ECE5DD;
    border-radius: 5px;
    height: 700px;
    overflow: hidden;
    


 }  
 .WhatsappImage
 {
    width:100%;
    height: 590px;
    opacity: 0.4;


 }
 .message
 {
    position: absolute;
    /* bottom: 5px; */
    width: 68.9%;
    background-color:#ededed;
    bottom: 7px;
    height: 60px;

 }
 #msg
 {
    border: none;
    position: absolute;
    width: 85%;
    bottom: 6px;
    left: 120px;
    height: 45px;
    border-radius: 10px;
 }
 .SubSection
 {
    /* margin-top: 10px; */
    opacity: 0.6;
    border: 1px solid black;
    background-size: 300px 100px;
    background-position: center;
    overflow: hidden;


    

 }
 .ChatList
 {
    border: 1px solid black;
    height: 700px;
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
    
    

    

 }  
 .header
 {
    border: 1px solid black;
    /* height: 100px; */
    background: #075e54;

 } 
#scroll
 {
    /* border:1px solid black; */
    position:relative;
    /* top:7px; */
    overflow-x: hidden;
    overflow-y: auto;
    height:88vh;
    overflow:auto;
    margin-top: 3px;
    /* transform:rotate(180deg); */
    /* direction:rtl; */
        
 }
 .ChatSection
 {
    border: 1px solid black;

 }
 @media  screen and (min-width: 200px) and (max-width: 500px) 
    {
        .Container {
        position: relative;
        top: 5px;
        display: grid;
        grid-template-columns: 100%;
        background-color: white;
        /* border: 2px solid black; */
        height: 700px;
        padding: 10px;
        grid-auto-rows: max-content;
        grid-gap: 1px;
        width: 150%
    }

    #send
 {
    position:relative;
    left: 260px;
    top: -27px;
 } 
 #scroll
 {
    /* border:1px solid black; */
    position:relative;
    /* top:7px; */
    overflow-x: hidden;
    overflow-y: auto;
    height:150vh;
    overflow:auto;
    margin-top: 3px;
    /* transform:rotate(180deg); */
    /* direction:rtl; */
        
 }
 #msg
 {
    border: none;
    position: absolute;
    width: 85%;
    bottom: 6px;
    left: 70px;
    height: 45px;
    border-radius: 10px;
 }
 .message
 {
    position: absolute;
    /* bottom: 5px; */
    width: 97%;
    background-color:#ededed;
    bottom: -700px;
    height: 60px;

 }
}

 @media  screen and (min-width: 500px) and (max-width: 730px) 
    {
        .Container {
        position: relative;
        top: 5px;
        display: grid;
        grid-template-columns: 100%;
        background-color: white;
        border: 2px solid black;
        height: max-content;
        padding: 10px;
        grid-auto-rows: max-content;
        grid-gap: 1px;
        width: 130%
    }
}
 @media  screen and (min-width: 730px) and (max-width: 850px) 
    {
        .Container {
        position: relative;
        top: 5px;
        display: grid;
        grid-template-columns: 50% 50%;
        background-color: white;
        border: 2px solid black;
        height: max-content;
        padding: 10px;
        grid-auto-rows: max-content;
        grid-gap: 1px;
        width: 99%
    }
}
 @media  screen and (min-width: 850px) and (max-width: 1150px) 
    {
        .Container {
        position: relative;
        top: 0px;
        display: grid;
        grid-template-columns: 50% 50%;
        background-color: white;
        border: 2px solid black;
        height:max-content;
        padding: 10px;
        grid-auto-rows: max-content;
        grid-gap: 1px;
        width: 100%
    }
}
 @media  screen and (min-width: 1150px) and (max-width: 1200px) 
    {
        .Container {
        position: relative;
        top: 0px;
        display: grid;
        grid-template-columns: 40% 60%;
        background-color: white;
        border: 2px solid black;
        height: max-content;
        padding: 10px;
        grid-auto-rows: max-content;
        grid-gap: 1px;
        width: 99%
    }

    }
    @media  screen and (min-width: 1400px) and (max-width: 1700px) 
    {
        .Container {
        position: relative;
        top: 5px;
        display: grid;
        grid-template-columns: 30% 70%;
        background-color: white;
        border: 2px solid black;
        height: max-content;
        padding: 10px;
        grid-auto-rows: max-content;
        grid-gap: 1px;
        width: 99%
    }
    #upload
    {
        left:-150px;
        position: relative;
        top:42px;

    }
    #file
    {
        position: relative;
        left: -465px;
    }
    #msg
 {
    border: none;
    position: absolute;
    width: 70%;
    bottom: 6px;
    left: 120px;
    height: 45px;
    border-radius: 10px;
 }
 .message
 {
    position: relative; 
    bottom: 5px;
     width: 100%;
    background-color:#ededed;
    bottom: 130px;
    height: 60px;

 }
 #scroll
 {
    /* border:1px solid black; */
    position:relative;
    /* top:7px; */
    overflow-x: hidden;
    overflow-y: auto;
    height:88vh;
    overflow:auto;
    margin-top: 3px;
    /* transform:rotate(180deg); */
    /* direction:rtl; */
        
 }
    
    }

</style>
