export const GETARTICLE='GETARTICLE'

export function GetArticle() {
    return (dispatch)=>{
            dispatch({
                type:GETARTICLE,
                data:'我是Home'
            })
    }
}
