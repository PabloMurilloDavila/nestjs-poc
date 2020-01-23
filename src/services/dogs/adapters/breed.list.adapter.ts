export class BreedListAdapter {

    public static toListandNumber(response){
        let breedNamesList = [''];
        Object.keys(response.message).forEach(key => { breedNamesList.push(key) });
        
        const responseAdapted = {
            list: breedNamesList, 
            total: breedNamesList.length,
        };
        console.log(responseAdapted);

        return responseAdapted;
    }
}

