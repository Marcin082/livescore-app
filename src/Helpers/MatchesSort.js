const MyCountries = [1,44,6,5,4,3]
const MyLeagues = [1,19,28,25,27,24,372,3,4,683,633,152,302,207,175,168,259]
export const SortByLeague =(Matches)=>{
    const LeaguesMatches = []
    const ids=[]
    console.log(Matches)

    for(let i=0;i<Matches.length;i++){
        if(!ids.includes(Matches[i].league_id)){
            LeaguesMatches.push( Matches.filter((league)=>Matches[i].league_id === league.league_id))
            ids.push(Matches[i].league_id)
        }
    }
    console.log(LeaguesMatches)
    console.log(ids)
    function Comparator(a, b) {
        if (a[0].country_name < b[0].country_name) return -1;
        if (a[0].country_name > b[0].country_name) return 1;
        return 0;
    }
         
    LeaguesMatches.sort(Comparator)

    LeaguesMatches.map((matches) => {
        if((MyLeagues.map(String)).includes(matches[0].league_id)){ 
            const index =LeaguesMatches.indexOf(matches);
            LeaguesMatches.splice(index, 1);
            LeaguesMatches.unshift(matches);
        }

    })
    return LeaguesMatches
}
export const AddTopLeagues =(Matches)=>{
    const LeaguesMatches = []
    const ids=[]
    for(let i=0;i<Matches.length;i++){
        if(!ids.includes(Matches[i].country_id)){
            LeaguesMatches.push( Matches.filter((league)=>Matches[i].country_id === league.country_id))
            ids.push(Matches[i].country_id)
        }
    }
console.log(LeaguesMatches)
    function Comparator(a, b) {
        if (a[0].country_name < b[0].country_name) return -1;
        if (a[0].country_name > b[0].country_name) return 1;
        return 0;
    }
         
    LeaguesMatches.sort(Comparator)
    console.log(LeaguesMatches)
    LeaguesMatches.map((matches) => {
        if((MyCountries.map(String)).includes(matches[0].country_id)){ 
            const index =LeaguesMatches.indexOf(matches);
            LeaguesMatches.splice(index, 1);
            LeaguesMatches.unshift(matches);
        }

    })
    console.log(LeaguesMatches)
    return LeaguesMatches
}
