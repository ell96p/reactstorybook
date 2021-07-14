import React from 'react';
import PageTemplate from "../stories/templates/PageTemplate";
import Card from "../stories/molekules/Card/Card";

const First = () => {
    return(
    <PageTemplate pageType={"primary"}>
        <>
    <Card cardType={"primary"}/>
    <Card cardType={"primary"}/>
    <Card cardType={"primary"}/>
    <Card cardType={"primary"}/>
    <Card cardType={"primary"}/>
    <Card cardType={"primary"}/>
        </>
    </PageTemplate>
    )
}
export default First;