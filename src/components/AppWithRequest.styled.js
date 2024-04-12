import styled from "styled-components";

export const StyledAppWithRequests = styled.div`
.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;

}

.postList {
    list-style: none;
    padding: 0;
    max-width: 450px;
}
.postListItem {
    padding: 20px;
    border: 2px solid black;
    margin-bottom: 25px;
    cursor: pointer;
}
.itemTitle {
    margin-top: 0;
    margin-bottom: 15px;

}
.itemBody {
    margin-top: 0;
    margin-bottom: 0;
}
.error-bage {
    padding: 25px;
    border: 1px solid red;
    background-color: red;
    margin-bottom: 20px;
    font-size: 20px;
}

.listWrapper {
    display: flex;
    gap:20px;

}

.commentsList{
    list-style: none;
    padding: 0;
    position: relative;
}
.commentsListItem {
    position: sticky;
    top: 20px;
    padding: 20px;
    border: 2px solid green;
    margin-bottom: 25px;
}
.commentName{
    margin-top: 0;
    margin-bottom: 15px;
}
.commentEmail{
    margin-top: 0;
    margin-bottom: 15px;
}
.commentBody{
    margin-top: 0;
    margin-bottom: 0;
}

`
