import React from "react";
import {Box, Stack} from "@mui/system";
import {Badge, Divider, IconButton, Typography} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {NotificationsOutlined} from "@mui/icons-material";

const Header : React.FC = () => {

        return (
            <Stack spacing={2} sx={{p:2}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Stack spacing={1}>
                    <Typography variant={'h6'} > Welcome</Typography>
                    <Typography variant={'body2'} >Your current sales auction and activity. </Typography>
                </Stack>
                <Box sx={{mt:2}}>
                <Badge badgeContent={2} color="error" sx={{cursor: 'pointer'}}
                               anchorOrigin={{
                                   vertical: 'bottom',
                                   horizontal: 'right',
                               }}
                        >
                        <NotificationsOutlined sx={{color:"#667085"}}  />
                        </Badge>
                </Box>
            </Box>
                <Divider/>
            </Stack>
        )
}

export default Header;