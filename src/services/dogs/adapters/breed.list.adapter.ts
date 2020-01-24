export class BreedListAdapter {

    public static toListandNumber(response) {
        let breedNamesList: string[] = [];

        Object.keys(response.message).forEach(key => { breedNamesList.push(key) });

        const responseAdapted = {
            list: breedNamesList,
            total: breedNamesList.length,
        };

        return responseAdapted;
    }
}