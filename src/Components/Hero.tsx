import React from "react";
import {Box, Stack} from "@mui/system";
import {Badge, Button, Paper, Typography, useMediaQuery} from "@mui/material";
import {ThumbUpAltOutlined} from "@mui/icons-material";
import Countdown from "@/Components/utils/Countdown";

const Hero : React.FC = () => {
        const isTab : boolean = useMediaQuery('(max-width: 860px)');
        const isMobile : boolean = useMediaQuery('(max-width: 680px)');
        const isSmall : boolean = useMediaQuery('(max-width: 480px)');
        const isLess : boolean = useMediaQuery('(max-width: 350px)');
        return (
            <Paper sx={{display: 'flex', borderRadius: '12px', flexDirection: 'column', p:2, m:2}}>
                <Box className={'heroImage'} >
                    <img
                    src={'/assets/img/hero.png'}
                    />
                </Box>
                <Box sx={{p:2, display: 'flex', flexDirection: isTab ? 'column' : 'row', alignItems: 'flex-start', height: isTab ? '100%' : '100px'}}>
                    <img style={{marginTop: '-70px', alignSelf: isTab ?  'center' : ''}} src={'/assets/img/heroSub.png'}/>
                    <Box sx={{display: 'flex', gap: isMobile ? 2 : 0, flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between' , width: '100%' }}>
                        <Stack spacing={1}  sx={{mx: isMobile ? 'auto' : 'none'}} >
                            <Countdown/>
                            <Stack className={'less'}  spacing={2}  direction={ isLess ? 'column' : 'row'}>
                                <Box className={'live'}>
                                    <img src={'/assets/img/dot.png'} width={6} height={6}/>
                                    <Typography  variant={'subtitle1'}>
                                        Not live
                                    </Typography>
                                </Box>
                                <Typography component={'p'} sx={{color: '#475467'}} variant={'subtitle1'}>
                                    Layers Auction
                                </Typography>
                            </Stack>
                        </Stack>

                        <Button sx={{mx: isMobile ? 'auto' : 'none'}} className={'accept'} size={'small'} startIcon={<ThumbUpAltOutlined/>} variant={'outlined'}>Accept Invites</Button>
                    </Box>
                </Box>
            </Paper>
        )
}

export default Hero;