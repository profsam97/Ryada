import React from "react";
import {Grid, Skeleton} from "@mui/material";
import {Stack} from "@mui/system";
    interface ISkeleton {
        index: number
    }
const SkeletonUtil : React.FC<ISkeleton> = ({index}) => {

    return <Grid key={index} item xs={12} sm={6} md={4} lg={3} >
        <Stack spacing={0.5}  sx={{width: {xs: 220, sm: 200, md: 250, lg: 310, xl: 300}}}>
            <Skeleton variant='rectangular'  animation='wave' height={158}  />
            <Skeleton  animation='wave' />
            <Skeleton  animation='wave' height={70} />
            <Skeleton  animation='wave' />

            <Skeleton  animation='wave' height={50} />
        </Stack>
        </Grid>
}

export default SkeletonUtil;