<template>
    <div class="groupBorder" @click="display()">
    <div class="grouplist" >
        <div><img class="groupImage" src="https://cdn.dribbble.com/users/6147920/screenshots/14325672/media/82dc88c61fe3d073711706256023e7c6.jpg" width="50px" height="60px" />
        </div>
            <div>
        <div id="section1">
        <div style="width:max-content;position: relative"><h4 class="name">{{ data.groupid }}</h4> </div>
          <!-- <span><i id="tick" class="fa fa-check" aria-hidden="true"></i></span> -->
          <div style="width:max-content;position: relative;top:43px;color:gray"><h4 class="message">{{data.messagetext}}</h4></div>
           
        </div>
        <div id="section2">
            <div style="width:max-content;left: 30px;position: relative;color:grey"><h4 class="time">{{data.timestamp.slice(11,16)}}</h4></div>
            <div style="width:max-content;"><h4 class="count">{{data.count}}</h4></div>
        </div>
    </div>
</div>




    </div>
</template>
<script src="../components/js/GroupList.js">
</script>
<style scoped>
.grouplist
{
    display: flex;
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    /* border: 1px solid black; */
    border-bottom: 1px solid rgba(0,0,0,0.06);
    /* margin-top: 14px; */
    height:80px;
    background:#ECE5DD;

    /* background: #ebebeb; */
    cursor: pointer;
}
.groupImage
{
    border-radius: 50%;
    border: 1px solid black;
    margin-top: 14px;
    margin-left: 20px;
}
/* .groupBorder
{
    border: 1px solid black;
    margin-top: 10px;
} */

.grouplist:hover
{
    background: #f5f5f5
}
#tick
{
    position: relative;
    width: fit-content;
    top: -11px;
}
#section1
{
    /* display: inlineflex; */
    justify-content: space-between;
    width:50%;
    height: 5px;
    position: relative;
    top: -5px;
}
#section2
{
    /* display: inline-flex; */
    justify-content: space-between;
    height: fit-content;
    position: relative;
    top: -40px;
    left: 20px;

}
.time
{
    position: relative;
    left:276px;
    top:7px
}
.count
{
    position: relative;
    left:276px;
}
.name
{
    position: relative;
    left:50px;

}
.message
{
    position: relative;
    left:50px;
    bottom: 55px;

}
@media  screen and (min-width: 200px) and (max-width: 480px) 
    {
       .time,.count
        {
             position: relative;
             left:330px;
        }
        .name,.message
        {
              position: relative;
            left:35px;
        }
    }
    @media  screen and (min-width: 500px) and (max-width: 650px) 
    {
       .time,.count
        {
             position: relative;
             left:335px;
        }
        .name,.message
        {
              position: relative;
            left:35px;
        }
    }
@media  screen and (min-width: 650px) and (max-width: 730px) 
    {
       .time,.count
        {
             position: relative;
             left:455px;
        }
        .name,.message
        {
              position: relative;
            left:35px;
        }
    }
    @media  screen and (min-width: 730px) and (max-width: 900px) 
    {
       .time,.count
        {
             position: relative;
             left:210px;
        }
        .name,.message
        {
              position: relative;
            left:35px;
        }
    }
@media  screen and (min-width: 900px) and (max-width: 1150px) 
    {
       .time,.count
        {
             position: relative;
             left:290px;
        }
        .name,.message
        {
              position: relative;
            left:35px;
        }
    }

@media  screen and (min-width: 1150px) and (max-width: 1250px) 
    {
       .time,.count
        {
             position: relative;
             left:210px;
        }
        .name,.message
        {
              position: relative;
            left:35px;
        }
    }
@media  screen and (min-width: 1250px) and (max-width: 1500px) 
    {
       .time,.count
        {
             position: relative;
             left:220px;
        }
        .name,.message
        {
              position: relative;
            left:50px;
        }
    }
    @media  screen and (min-width: 1600px) and (max-width: 1750px) 
    {
       .time,.count
        {
             position: relative;
             left:295px;
        }
        .name,.message
        {
              position: relative;
            left:50px;
        }
    }
    @media  screen and (min-width: 1750px) and (max-width: 2100px) 
    {
       .time,.count
        {
             position: relative;
             left:360px;
        }
        .name,.message
        {
              position: relative;
            left:50px;
        }
    }

</style>