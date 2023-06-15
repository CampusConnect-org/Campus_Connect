export const initialState={
    user:null,
    name:'',
    college:'',
    yearOfStudy:'',
    email:'',
    interests:[],
    goals:[]
};

const reducer=(state,action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
                user:action.user,
                name:action.name,
                college:action.college,
                yearOfStudy:action.yearOfStudy,
                email:action.email
            }
        case 'SET_PROFILE':
            return{
                interests:action.interests,
                goals:action.goals
            }
        default:
            return state
    }
};

export default reducer;