import React, {useState} from "react";
import {Box, Stack} from "@mui/system";
import {Button, Divider, Grid, Paper, Typography} from "@mui/material";
import Cards from "@/Components/utils/Cards";
import {IProduct, TData} from "@/Helpers/types";
import {useDataFetch} from "@/Hooks/UsedataFetch";
import SkeletonUtil from "@/Components/utils/Skeleton";

const Featured : React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const onSuccess  = (fetchedData : TData) => {
        const {data} = fetchedData
        setProducts(data)
    }
    const {isLoading} = useDataFetch(onSuccess)
        return (
            <Paper sx={{borderRadius: '5px', p:2, display: 'flex', flexDirection: 'column', gap:3, m:2  }}>
                <Stack sx={{display: 'flex', flexDirection:'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                    <Typography variant={'h6'}>
                        Featured Items
                    </Typography>

                    <Button size={'small'}   className={'accept'} >
                        View Auction
                    </Button>
                </Stack>
                <Divider/>
                {isLoading && <Grid container>
                        {[1,2,3,4].map((value, index) => (
                        <SkeletonUtil key={value} index={index}/>
                        ))
                        }
                    </Grid>
                }
                {products.length > 0 &&
                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <Cards product={product} />
                        </Grid>
                        ))}
                </Grid>
                }
            </Paper>
        )
}
export default Featured