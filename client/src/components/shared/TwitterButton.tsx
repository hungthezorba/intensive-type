import React from 'react';
import { ButtonProps, Button } from '@chakra-ui/react'

function TwitterButton(props: ButtonProps) {

    return (
        <Button {...props}
        borderStyle={"solid"}
        boxShadow={"rgb(0 0 0 / 8%) 0px 8px 28px"}
        borderRadius={9999}>
            {props.children}            
        </Button>
    )
}

export default TwitterButton
