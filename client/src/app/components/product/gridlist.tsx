'use client'
import * as React from 'react';
import axios from 'axios' 
import CardUI2 from "@/src/app/components/product/card";
import { User } from '@prisma/client';
import { useEffect, useState } from 'react';
import CONF from '@/src/app/layout'
import { Card, Tooltip, Grid, Row, Text, Input} from "@nextui-org/react";
 
interface GridListProps {
  currentUser?: User | null 
}

const GridList : React.FC<GridListProps> = ({
  currentUser 
}) => {
  const [data, setData] = useState([]);
  const [searchval, setSearchval] = useState("");
  useEffect(() => {
    axios.get('http://localhost:3001/products/')
      .then(response => {
        const jsonData = response.data;
        setData(jsonData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

       
      
      
    return (
<>
<Input onChange={(ev) => {
  setSearchval(ev.target.value)
}} clearable bordered labelPlaceholder="Search Phones" initialValue="" />

      <Grid.Container gap={2} justify="flex-start">
      {data.filter((val)=>{
        if(searchval == ""){
          return val;
        } else if (val['os']?.toLowerCase().includes(searchval.toLowerCase())){
          return val;
        } else{}
      }).map((item, index) => 
     
      (
         
        <Grid xs={6} sm={3} key={index}>
       <Tooltip           placement="bottom"
 color="invert" content={"Show more information for " + item['os'] }> 
          <CardUI2   image={item['image']} os={item['os']} screen={item['screen']} price={item['price']} />
        
      </Tooltip> </Grid>
      ))}
    </Grid.Container></>
    /*
    <Grid.Container gap={2} justify="center">
 

      {data.map(item => (
        <Grid key={item['id']}>
        
        <CardUI2 image={item['image']} os={item['os']} screen={item['screen']} />
     </Grid>
      ))}
       
</Grid.Container>
*/)
}


export default GridList