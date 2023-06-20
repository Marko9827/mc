"use client";
import * as React from "react";
import axios from "axios";
import CardUI2 from "@/src/app/components/product/card";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import CONF from "@/src/app/layout";
import {
  Modal,
  Table,
  useModal,
  Button,
  Image,
  Card,
  Tooltip,
  Grid,
  Row,
  Dropdown,
  Text,
  Input,
} from "@nextui-org/react";
import { FaBootstrap } from "react-icons/fa";
import { BsFillDeviceSsdFill,BsMemory,BsWifi,BsPhone,BsCurrencyDollar } from "react-icons/bs";

interface GridListProps {
  currentUser?: User | null;
}

const GridList: React.FC<GridListProps> = ({ currentUser }) => {
  const [data, setData] = useState([]);
  const [datajs, setDatajs] = useState({});
  const [filterdjenerator, setfilterDJenerator ] = useState([]);
  const [searchval, setSearchval] = useState("");
  const [filter_ram, setFilter_ram] = useState("");
  const [filter_os, setFilter_os] = useState("");
  const { setVisible, bindings } = useModal();

  useEffect(() => {
    var url = "http://localhost:3001/products/";
    
    axios
      .get(url)
      .then((response) => {
        const jsonData = response.data;
        setData(jsonData);
        setfilterDJenerator(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
 const categorytmp = (ram = "") => { 
  axios.get("http://localhost:3001/products/"+String(ram))
  .then((response) => {
    const jsonData = response.data;
    setData(jsonData); 
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });  
}

  const [selectedOS, setSelectedOS] = React.useState(new Set([""]));

  const selectedValue_OS = React.useMemo(
    () => Array.from(selectedOS).join(", ").replaceAll("_", " "),
    [selectedOS]
  );
  
  const [selectedRAM, setSelectedRAM] = React.useState(new Set([""]));

  const selectedValue_RAM = React.useMemo(
    () => {
      
      
      categorytmp(Array.from(selectedRAM).join(", ").replaceAll("_", " "));
      return  Array.from(selectedRAM).join(", ").replaceAll("_", " ");
    },
    [selectedRAM]
  ); 
  const functModal = (data: {}) => {
    setDatajs(data);
    setVisible(true);
  };

  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12}>
          <>          <Input
            onChange={(ev) => {
              setSearchval(ev.target.value);
            }}
            clearable
            bordered
            labelPlaceholder="Search Phones"
            initialValue=""
          />
         
    <Dropdown className="margin-left-5 margin-right-5">
      <Dropdown.Button  flat   css={{ tt: "capitalize" }} >OS | {selectedValue_OS}</Dropdown.Button>
      <Dropdown.Menu 
      aria-label="Dynamic Actions" items={filterdjenerator}
            allow
      color="secondary" 
      selectionMode="single"
      selectedKeys={selectedOS}
      onSelectionChange={setSelectedOS}
      
      >
        {(item) => (
          <Dropdown.Item
            key={item?.os}
            color="default"
          >
            {item?.os}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown className="margin-right-5">
      <Dropdown.Button flat css={{ tt: "capitalize" }} ><BsMemory className="margin-right-5"/> RAM | {selectedValue_RAM}</Dropdown.Button>
      <Dropdown.Menu    aria-label="Dynamic Actions" items={filterdjenerator}
            allow
      color="secondary" 
      selectionMode="single"
      selectedKeys={selectedRAM}
      onSelectionChange={setSelectedRAM}
   items={filterdjenerator}>
        {(item) => (
          <Dropdown.Item
            key={item?.ram}
            color="default"
          >
            {item?.ram}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown> 
    </>
        </Grid>
        <Grid xs={12}>
          <Grid.Container gap={2} justify="flex-start">
            {data.filter((val) => {
                if (searchval == "") {
                  return val;
                } else if (
                  val["os"]?.toLowerCase().includes(searchval.toLowerCase())
                ) {
                  return val;
                } else { 
                }
 
              })
              .map((item, index) => (
                <Grid xs={6} sm={3} key={index}>
                  <Tooltip
                    placement="bottom"
                    color="invert"
                    content={"Show more information for " + item["os"]}
                  >
                    <CardUI2
                      onClick={() => functModal(item)}
                      image={item["image"]}
                      os={item["os"]}
                      screen={item["screen"]}
                      price={item["price"]}
                    />
                  </Tooltip>{" "}
                </Grid>
              ))}
          </Grid.Container>
        </Grid>
      </Grid.Container>

      <Modal
        scroll
        animated={true}
        blur={true}
        fullScreen={true}
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            More information for {datajs?.os}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            <Grid.Container gap={2} justify="center">
              <Grid xs={5}>
                <Card.Image
                  src={"http://localhost:3001/" + datajs?.image}
                  objectFit="scale-down"
                  width="100%"
                  height={250}
                  alt={""}
                />
              </Grid>
              <Grid xs={5}>
                <Table
                  aria-label="Example table with static content"
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                >
                  <Table.Header>
                    <Table.Column>-</Table.Column>
                    <Table.Column>-</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row key="1">
                      <Table.Cell>Name</Table.Cell>
                      <Table.Cell>{datajs?.os}</Table.Cell>
                    </Table.Row>
                    <Table.Row key="2">
                      <Table.Cell>Screen</Table.Cell>
                      <Table.Cell>
                    <BsPhone /> {datajs?.screen}</Table.Cell>
                    </Table.Row> 
                    <Table.Row key="2">
                      <Table.Cell>Networks</Table.Cell>
                      <Table.Cell><BsWifi/> {datajs?.networks}</Table.Cell>
                    </Table.Row>
                    <Table.Row key="3">
                      <Table.Cell>Price</Table.Cell>
                      <Table.Cell><BsCurrencyDollar/> ${datajs?.price}</Table.Cell>
                    </Table.Row>

                    <Table.Row key="4">
                      <Table.Cell>Memory</Table.Cell>
                      <Table.Cell> 
                        <BsFillDeviceSsdFill /> {datajs?.ssd} GB
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row key="5">
                      <Table.Cell>Ram</Table.Cell>
                      <Table.Cell><BsMemory/> {datajs?.ram} GB</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid>
            </Grid.Container>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
    /*
    <Grid.Container gap={2} justify="center">
 

      {data.map(item => (
        <Grid key={item['id']}>
        
        <CardUI2 image={item['image']} os={item['os']} screen={item['screen']} />
     </Grid>
      ))}
       
</Grid.Container>
*/
  );
};

export default GridList;
