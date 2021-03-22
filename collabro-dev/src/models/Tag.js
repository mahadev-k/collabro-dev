export const Tag = {
    tagKey:'',
    tagName:'',
    isSelected:0,
    subTags:[],
    uri:''
}

export const loadInitialTags_SCI = () => {
    let listOfTags = [];
    const spaceFlight = Object.create(Tag);
    spaceFlight.tagKey=1;
    spaceFlight.tagName="Spaceflight News API";
    spaceFlight.isSelected = 1;
    spaceFlight.uri='https://test.spaceflightnewsapi.net/api/v2/articles?_limit=20&_start=';

    listOfTags = [...listOfTags, spaceFlight];
    return listOfTags;

}