<template>
    <div class="Header">
        <div>
            <div style="display: flex;position:relative;">
               <!-- <h1 id="whatsapp">WhatsApp</h1> -->
               <div class="user"><img src="https://c4.wallpaperflare.com/wallpaper/792/639/808/pattern-monochrome-telegram-logo-cats-hd-wallpaper-thumb.jpg" class="user_image"></div>
               <i @click="CreateGroup()" id="group" class="fa fa-users" aria-hidden="true"></i>
               <!-- <p>{{ RetrieveGroup }}</p> -->
               <!-- <button id="group_button" type="button" @click="CreateGroup()"></button> -->
               
               <!-- <button id="logout_button" type="button" @click="CreateGroup()"></button> -->
               <i  @click="logout" id="dotline" class="fa fa-sign-out" aria-hidden="true"></i>
               <span><h4 style="color:white; left:10px;position: relative;width:30%;">{{ data }}</h4></span>
            </div>
            <div class="Options">
                <!-- <h4 class="chats">Chats</h4>
                <h4 class="contact">Contacts</h4> -->
                <div class="search"> 
                    <input type="text" placeholder="Search" v-model='searchgroup'/> 
                    <i id="searchicon" class="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="popup" id="Form">
            <form action="" class="form_container">
                <h1>Create Group</h1>

                <label for="email"><b>Group Name</b></label>
                <input type="text" placeholder="Enter Name" name="group" required>

                <label for="contact"><b>Contacts</b></label>
                
                <select  placeholder="Contacts" name="contact" required>
                    <option  v-for="(i,index) in RetrieveContact" :key="index" >
                        <input v-for="(i,index) in RetrieveContact" :key="index" type="checkbox" value="jhdjhde"/>{{i.mobilenum}}
                    </option>
                    </select>
                <!-- <v-select v-model="selected" :options="['foo','bar']"></v-select> -->
                <!-- <ejs-multiselect :dataSource='RetrieveContact' placeholder="Select a Contacts"></ejs-multiselect> -->

                <button type="submit"  class="btn">Create</button>
                <button type="button" class="cancel" @click="Cancel()">Close</button>
            </form>
</div>

    </div>
</template>
<script src="../components/js/Header.js">

</script>
<style scoped>

@import url(https://cdn.syncfusion.com/ej2/material.css);

.Header
{
    height: fit-content;
    font-size: medium;
    background: #075e54;
    z-index: 2;
    

}
.user
{
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 15px;
    margin-top: 10px;
    top: -5px;
}

#group_button
{
    position: relative;
    top: 17px;
    left: 255px;
    height: 25px;
    width: 30px;

    
}
#logout_button
{
    position: relative;
    top: 17px;
    left: 275px;
    height: 25px;
    width: 30px;

}

#group
{
    position: relative;
    left: 250px;
    margin-top: -25px;
    color: white;

}
#dotline
{
    position: relative;
    left: 380px;
    margin-top: -25px;
    height: 50px;
    color: white;


}
.Options
{
   position: relative;
   width: 101%;
   height: 50px;
   background: #128c7e;
   display: flex;
   justify-content: space-between;
   padding: 0.15px;
   z-index: 1;
   bottom: 27px;
   left:-1px;
   top: -1px;

}
.search
{
    width: 90%;
}
#searchicon
{
    position: absolute;
    /* margin-right:   0px; */
    left:370px;
    top: 16px;

}
input
{
    width: 100%;
    outline: none;
    border: none;
    background:#fff;
    position: relative;
    padding: 6px;
    height: 25px;
    border-radius: 30px;
    font-size: 14px;
    top: 7px;
    left: 15px;

}
.chats
{
    position: relative;
    left:110px;
}
.contact
{
    position: relative;
    right:105px;
}

#whatsapp
{
    position: relative;
    left: -110px;

}
.open-button {
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  right: 28px;
  width: 280px;
}
.popup {
  display: none;
  position: fixed;
  bottom: 170px;
  right: 600px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}
.form_container {
  max-width: 300px;
  padding: 10px;
  background-color: white;
}
.form_container input[type=text] {
  width: 80%;
  left: 0px;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}
select{
  width: 90%;
  left: 0px;
  padding: 15px;
  margin: 5px 0 22px 0;
  border-radius: 30px;
  border: none;
  background: #f1f1f1;
}
.form_container input[type=text]:focus{
  background-color: #ddd;
  outline: none;
}
select:focus {
  background-color: #ddd;
  outline: none;
}
.form_container .btn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;
}
.form_container .btn:hover, .open-button:hover {
  opacity: 1;
}
.form_container .cancel {
  background-color: red;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;
}














@media  screen and (min-width: 1800px) and (max-width: 2100px) 
    {
        #whatsapp
        {
            position: relative;
            left: -90px;

        }
        #group
        {
            position: absolute;
            left: 450px;
            top: 50px;

        }
        #dotline
        {
            position: absolute;
            left: 500px;
            top: 50px;
            height: 50px;

        }
                
    }
@media  screen and (min-width: 1700px) and (max-width: 1800px) 
    {
        #whatsapp
        {
            position: relative;
            left: -90px;

        }
        #group
        {
            position: absolute;
            left: 440px;
            top: 50px;

        }
        #dotline
        {
            position: absolute;
            left: 490px;
            top: 50px;
            height: 50px;

        }
                
    }
@media  screen and (min-width: 1500px) and (max-width: 1700px) 
    {
        #whatsapp
        {
            position: relative;
            left: -90px;

        }
        #group
        {
            position: absolute;
            left: 380px;
            top: 50px;

        }
        #dotline
        {
            position: absolute;
            left: 430px;
            top: 50px;
            height: 50px;

        }

    }
    @media  screen and (min-width: 1200px) and (max-width: 1300px) 
    {
        #group
        {
            position: absolute;
            left: 290px;
            top: 50px;

        }
        #dotline
        {
            position: absolute;
            left: 340px;
            top: 50px;
            height: 50px;

        }
        

    }
@media  screen and (min-width: 1300px) and (max-width: 1500px) 
    {
        #group
        {
            position: absolute;
            left: 330px;
            top: 50px;

        }
        #dotline
        {
            position: absolute;
            left: 385px;
            top: 50px;
            height: 50px;

        }
                
    }
    @media  screen and (min-width: 800px) and (max-width: 1150px) 
    {
        #group
        {
            position: absolute;
            left: 350px;
            top: 50px;

        }
        #dotline
        {
            position: absolute;
            left: 400px;
            top: 50px;
            height: 50px;

        }
                
    }
    @media  screen and (min-width:750px) and (max-width: 800px) 
    {
        #group
        {
            position: absolute;
            left: 350px;
            top: 50px;

        }
        #dotline
        {
            position: absolute;
            left: 400px;
            top: 50px;
            height: 50px;

        }
                
    }
    @media  screen and (min-width:500px) and (max-width: 700px) 
    {
        #group
        {
            position: absolute;
            left: 500px;
            top: 50px;

        }
        #dotline
        {
            position: absolute;
            left: 550px;
            top: 50px;
            height: 50px;

        }
                
    }
    @media  screen and (min-width:300px) and (max-width: 500px) 
    {
        #group
        {
            position: absolute;
            left: 420px;
            top: 50px;

        }
        #dotline
        {
            position: absolute;
            left: 470px;
            top: 50px;
            height: 50px;

        }
                
    }



</style>

