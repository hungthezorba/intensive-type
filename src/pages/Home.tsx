import React from 'react';
import {Box, Grid, GridItem} from '@chakra-ui/react';
import {Nav} from '../components/nav';
function Home() {

    return (
        <Grid templateColumns={["repeat(3,1fr)","repeat(7,1fr)"]}>
            <GridItem display="flex" justifyContent={"flex-end"} flexGrow={1} colSpan={2}>
                <Nav/>
            </GridItem>
            <GridItem colSpan={3}>
                <p>MAIN</p>
            </GridItem>
            <GridItem colSpan={2}>
                <p>TRENDINGS</p>    
            </GridItem>           
        </Grid>
    )
}

export default Home;