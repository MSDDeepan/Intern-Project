import { mapGetters } from "vuex";

export default
{
    name: "ChatHeader",
    data()
    {
        return{}
    },
    props:
    {
        
        detail:
        {
            type: String,
        }

    },
    computed:
    {
         ...mapGetters('GroupMember',['RetrieveMember'])
    },
    methods:
    {
        ShowGroupMember()
        {
            document.getElementById("Form1").style.display = "block";
        },
        Cancel()
        {
            document.getElementById("Form1").style.display = "none";
        }

    }
}