<template>
    <div class="Header1">
        <div>
            <div>
               <!-- <h1 id="whatsapp">WhatsApp</h1> -->
               <div class="user1"><img src="https://c4.wallpaperflare.com/wallpaper/792/639/808/pattern-monochrome-telegram-logo-cats-hd-wallpaper-thumb.jpg" class="user_image"></div>
               <div class="group_name"><h1 >{{ detail }}</h1></div>
                <i @click="ShowGroupMember" id="group1" class="fa fa-users" aria-hidden="true"></i>
                <i id="dotline1" class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
        </div>
        <div class="popup1" id="Form1">
            <div class="member">
                  <h5  v-for="(i,index) in RetrieveMember" :key="index">{{ i.userid }}</h5>
                  <button type="button" class="cancel" @click="Cancel()">Close</button>
            </div>
            
        </div>

    </div>
</template>
<script src="../components/js/ChatHeader.js">

</script>
<style scoped>

.Header1
{
    height: 60px;
    font-size: medium;
    background: #075e54;
    z-index: 2;
    margin-top: -10px;
    width: 100%;


}
.group_name
{
    position:relative;
    top: -55px;
    left:-330px;
    color:white;
}
.user1
{
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 15px;
    margin-top: 10px;
    top: 4px;
}
.member
{
    max-width: 300px;
  padding: 10px;
  background-color: white;
  position:relative;
  top: -270px;
  right: -450px;
  
}

#group1
{
    position: relative;
    left: 400px;
    top: -30px;
    color: white;


}
#dotline1
{
    position: relative;
    left: 440px;
    top: -30px;
    height: 50px;
    color: white;


}

.popup1 {
  display: none;
  position: fixed;
  bottom: 170px;
  right: 600px;
  /* border: 3px solid #f1f1f1; */
  z-index: 9;
  
}







@media  screen and (min-width: 1900px) and (max-width: 2100px) 
    {
        
        #group1
        {
            position: absolute;
            left: 1800px;
            top: 40px;

        }
        #dotline1
        {
            position: absolute;
            left: 1900px;
            top: 40px;
            height: 50px;

        }
    
                
    }
@media  screen and (min-width: 1700px) and (max-width: 1800px) 
    {
        
        #group1
        {
            position: absolute;
            left: 1550px;
            top: 40px;

        }
        #dotline1
        {
            position: absolute;
            left: 1650px;
            top: 40px;
            height: 50px;

        }                
    }
@media  screen and (min-width: 1600px) and (max-width: 1700px) 
    {
        #group1
        {
            position: absolute;
            left: 1450px;
            top: 40px;

        }
        #dotline1
        {
            position: absolute;
            left: 1520px;
            top: 40px;
            height: 50px;

        }
        
    }
    @media  screen and (min-width: 1300px) and (max-width: 1400px) 
    {
        #group1
        {
            position: absolute;
            left: 1180px;
            top: 40px;

        }
        #dotline1
        {
            position: absolute;
            left: 1250px;
            top: 40px;
            height: 50px;

        }
        
    }
@media  screen and (min-width: 1400px) and (max-width: 1600px) 
    {
        #group1
        {
            position: absolute;
            left: 1230px;
            top: 30px;

        }
        #dotline1
        {
            position: absolute;
            left: 1300px;
            top: 30px;
            height: 50px;

        }  
    }
    @media  screen and (min-width: 800px) and (max-width: 1200px) 
    {
        
        #group1
        {
            position: absolute;
            left: 700px;
            top: 40px;

        }
        #dotline1
        {
            position: absolute;
            left: 760px;
            top: 40px;
            height: 50px;

        }
                
    }
    @media  screen and (min-width:750px) and (max-width: 800px) 
    {
        #group1
        {
            position: absolute;
            left: 350px;
            top: 50px;

        }
        #dotline1
        {
            position: absolute;
            left: 400px;
            top: 50px;
            height: 50px;

        }

                
    }
    @media  screen and (min-width:500px) and (max-width: 700px) 
    {
        #group1
        {
            position: absolute;
            left: 550px;
            top: 730px;

        }
        #dotline1
        {
            position: absolute;
            left: 600px;
            top: 730px;
            height: 50px;

        }
                
    }
    @media  screen and (min-width:300px) and (max-width: 500px) 
    {
        #group1
        {
            position: absolute;
            left: 550px;
            top: 730px;

        }
        .group_name
{
    position:relative;
    top: -55px;
    left:-95px;
    color:white;
}
        #dotline1
        {
            position: absolute;
            left: 600px;
            top: 730px;
            height: 50px;

        }
        
                
    }



</style>

