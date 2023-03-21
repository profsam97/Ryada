import React from "react";
import {Box, Stack} from "@mui/system";
import {Avatar, Button, Card, Divider, Typography} from "@mui/material";
import {IProduct} from "@/Helpers/types";
import {truncate} from "@/Helpers/Truncate";
import reduceName from "@/Helpers/Reduce";

type  TProducts = {
    product: IProduct
}

const Cards : React.FC<TProducts> = ({product}) => {
        const {bid,name, title, image} = product
        return <Card sx={{ p:2, borderRadius: '12px'}} className={'card'}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap:2}}>
                        <img   src={image} style={{display: 'flex',height: 140, alignSelf: 'stretch',  backgroundColor: '#F2F4F7', borderRadius: '12px'}}>
                        </img>
                        <Stack className={'cardOverlay'} spacing={1} sx={{display: 'flex', flexDirection: 'row'}}>
                            <Avatar sx={{background: '#F2F4F7', color: '#475467', mr:1}} variant={'circular'}> {reduceName(name)} </Avatar>
                            <Stack direction={'row'} className={'overflow'} sx={{my:2, width: '100%'}}>
                                <Typography variant={'body1'}><b> {name} </b></Typography>
                                <Typography sx={{fontWeight: '400'}} variant={'body1'}>(Highest Bidder)</Typography>
                            </Stack>
                        </Stack>
                        <Typography variant={'body1'}>
                          <b>  {truncate(title, 60)} </b>
                        </Typography>

                        <Stack direction={'row'} spacing={2}>
                            <Typography sx={{fontWeight: '400'}} variant={'body1'}>
                                Current bid:
                            </Typography>
                            <Typography  variant={'body1'}>
                               <b> {bid} </b>
                            </Typography>
                        </Stack>
                        <Divider/>
                        <Button fullWidth={true} variant={'contained'} className={'wishlist'}>
                            Add to wishlist
                        </Button>
                    </Box>
                </Card>
}

export default Cards;