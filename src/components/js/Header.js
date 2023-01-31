import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default
{
    name: "HeaderComponent",
    data()
    {
        return{
            searchgroup:"",
            filter_name: [],
            user_detail: []
        }
    }, 
    props:
    {
        data:
        {
            type: String,
        }
    },
    mounted()
    {
        // this.user_detail = this.RetrieveGroup
        // this.$root.$on("setUser",(data)=>{
        //     this.name=data
        //     console.log(data)
        // })
    },
    computed:
    {
         ...mapGetters('ChatStore',['RetrieveChat']),
         ...mapGetters('GroupStore',['RetrieveGroup']),
         ...mapGetters('ContactStore',['RetrieveContact']),


         ...mapGetters('Search',['RetrieveSearch']),
         ...mapGetters('ContactStore',['RetrieveContact'])

    },
    methods:
    {
        ...mapActions('Search',['getSearch']),
        ...mapActions('ContactStore',['getContact']),

         async CreateGroup()
        {
            document.getElementById("Form").style.display = "block";
            await axios.get("http://10.30.1.7:8082/displayContacts").then((response)=>
            {
                this.getContact(response.data)
                console.log(this.RetrieveContact,"jhje")
                console.log(response.data)
            })
            
        },
        Cancel()
        {
            document.getElementById("Form").style.display = "none";
        },
        logout()
        {
            let s=axios.get(`/one/logout`)
            this.$router.push({name:'LoginComponent'})
            console.log(s);

        },

    },
    watch:
    {
        
        searchgroup:function()
        {
            this.user_detail=Object.values(this.RetrieveGroup)
            this.filter_name = this.user_detail.filter(i => 
                (this.searchgroup ? i.groupid === this.searchgroup : true) )
            console.log(this.filter_name) 
            // this.getSearch(this.filter_name)
            // console.log(this.RetrieveSearch)
            this.$emit('getFilter',this.filter_name)


        },
    } 
}   