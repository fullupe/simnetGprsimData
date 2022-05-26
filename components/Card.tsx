import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import toast from 'react-hot-toast'

import Data from '../Data'

function Card() {
  const [input, setInput] = useState<string>('')

  const [simserialnumber, setSimserialnumber] = useState<string>('')
 
  const [simType, setSimType] = useState<string>('')

  const [tpmInfo, setTpmInfo] = useState<any>('')

  const [DataApi, setDataApi] = useState<any>([])

  const [reflesh, setReflesh] = useState<boolean>(false)

  const [flagoff, setFlagoff] = useState<boolean>(false)

  //console.log(Data)

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    Data.filter((val: { tpm: string }) => {
      if (!input) {
        return val
      } else if (val.tpm?.toLowerCase().includes(input?.toLowerCase())) {
        //return val
        setTpmInfo(val);

        toast('Record Fund!',{
          icon:'🚀'
        })
      
        // setFlagoff(true);
      
      
      }else{
        //setTpmInfo({})
        //setFlagoff(false)
        // toast('No Record Fund!',{
        //   icon:'🚀'
        // })
      
      }
      
  
    })

  

  }


  useEffect(() => {
      axios.get("https://sheet.best/api/sheets/fd63dafd-0803-427b-88f2-5aa4c83d209f").then((response)=>{
      setDataApi(response.data)
      console.log(response.data)
      //setLoading(false)
    }).catch((error)=>{
      console.log(error)
    })
  },[reflesh])

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    axios
      .patch(
        `https://sheet.best/api/sheets/fd63dafd-0803-427b-88f2-5aa4c83d209f/tpm/*${input}*`,
       
        { simSerial: simserialnumber, simType:simType }
      )
      .then((response) => {
        setReflesh(!reflesh)
        console.log(response.data)
        setSimserialnumber('')
        toast('Records Updated!',{
          icon:'🚀'
        })
       
      })
      .catch((error) => {
        console.log(error)
      })





    // Filtered Update
    // Update all rows that have "John" inside the name column and change it to "Jack Doe"
    //fetch(

    //`https://sheet.best/api/sheets/fd63dafd-0803-427b-88f2-5aa4c83d209f`

    // {
    //   method: "PATCH",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     Name: "Jack Doe",
    //   }),
    // }

    //)
    //.then((r) => r.json())
    //.then(console.log)
    //.catch(console.error);

    //  const sendData = {
    //   simserialnumber,
    //   simType,
    //  }

    //  console.log(sendData)
  }

  return (
    <div
      className={`py-4 px-4 bg-whitee bg-gradient-to-r from-sky-500 to-indigo-500 shadow-2xl h-4/5 md:max-w-md !important text-lg rounded-2xl relative  flex flex-col  leading- w-4/5 text-white mt-8 mb-8 overflow-hidden`}
    >
      <div className="felx flex-col space-y-2">
        <div className=" h- bg-gray-00  items-center flex flex-col mb-8 ">
          <p className="text-gray-900 text-xl font-bold border-b ">
            GPRS Record{' '}
          </p>

          <form className="flex items-center mt-3 space-x- mb-4">
           
            <div className="flex w-full space-x-8">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={4}
              type="number"
              autoFocus={true}
              placeholder="Enter Tpm Number"
              className=" p-1 w-44 flex-1 text-xl rounded-lg bg-gray-100 text-black outline-none placeholder:text-xl"
            />
            {/* <button disabled={!input} className="text-white rounded-lg bg-blue-700 disabled:text-gray-800 cousor-pointer p-2 ">Search</button> */}
            <button
            type="submit"
              onClick={handleSearch}
              disabled={!input}
              className="bg-transparent  hover:bg-blue-500 disabled:text-gray-800 text-white font-semibold hover:text-white py-0 ml-2 px-2 border border-white hover:border-transparent rounded"
            >
             <AiOutlineSearch className="text-white h-8 w-8 p-1 disabled:text-gray-800" />
            </button>
            </div>

          </form>

          <div className=" text-gray-900 items-center flex flex-col w-full">
            <p className="border-b text-white">Terminal Details</p>

            <div className="w-full flex flex-col mt-4  items-right space-y-4">
              <p className="p-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-50">
                Retailer Name:{' '}
                <small className="ml-2 text-center text-white uppercase ">
                  {tpmInfo.retailerName}
                </small>
              </p>

              <div className="flex space-x-1">
                <p className="p-1 flex-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-50">
                  Retailer#:{' '}
                  <small className="ml-2 text-center ">
                    {tpmInfo.retailerId}
                  </small>
                </p>

                <p className="p-1 flex-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-50">
                  LMC:{' '}
                  <small className="ml-2 text-center ">{tpmInfo.lmc}</small>
                </p>
              </div>

              <p className="p-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-50">
                Sim Serial:{' '}
                <small className="ml-2 text-center ">
                  {tpmInfo.simSerial}
                </small>
              </p>

              {/* <p className="p-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                sim Number: <small className="ml-2  ">{tpmInfo.sim_number}</small>
              </p> */}
              <p className="p-1  px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-50">
                Sim Type: <small className="ml-2    ">{tpmInfo.simType}</small>
              </p>
            </div>
          </div>
        </div>

        <hr  />

        <form className=" flex flex-col h-full w-full bg-yellow-00 p-4 space-y-3">
          <input
            value={simserialnumber}
            onChange={(e) => setSimserialnumber(e.target.value)}
            //maxLength={4}
            type="number"
            autoFocus={true}
            placeholder="Enter New Serial Number"
            className=" p-2 flex w-full text-xl rounded-lg bg-gray-100 text-black outline-none placeholder:text-xl"
          />

          {/* <input
            value={simNumber}
            onChange={(e) => setSimNumber(e.target.value)}
            //maxLength={4}
            type="number"
            autoFocus={true}
            placeholder="Enter New Sim Number"
            className=" p-2 flex w-full text-xl rounded-lg bg-gray-100 text-black outline-none placeholder:text-xl"
          /> */}
          <label>Choose Sim Type</label>

          <select
            className=" p-2 flex w-full text-xl rounded-lg bg-gray-100 text-black outline-none placeholder:text-xl"
            onChange={(e) => setSimType(e.target.value)}
            value={simType}
          >
            <optgroup label="Sim Type">
              <option value="Mtn">Mtn</option>
              <option value="Tigo">Tigo</option>
              <option value="Voda">Voda</option>
              <option value="Glo">Glo</option>
            </optgroup>
          </select>
          <button
          type="submit"
            onClick={handleSubmit}
            disabled={!tpmInfo?.tpm || !simserialnumber}
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border disabled:text-gray-800 border-white hover:border-transparent rounded"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Card
