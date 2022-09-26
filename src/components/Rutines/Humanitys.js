import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Download from './Download';

const Humanitys = () => {
    const [date, setDate] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'))
    setInterval(() => {
        setDate(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }, 1000);
    const day = moment().format('dddd')
    const [sunday, setSunday] = useState()
    const [monday, setmonday] = useState()
    const [tuesday, settuesday] = useState()
    const [wednesday, setWednesday] = useState()
    const [Thursday, setThursday] = useState()
    useEffect(() => {
        if (day === 'Sunday') {
            setSunday('border-2 border-accent main-row')
        }
        else if (day === 'Monday') {
            setmonday('border-2 border-accent main-row')
        }
        else if (day === 'Tuesday') {
            settuesday('border-2 border-accent main-row')
        }
        else if (day === 'Wednesday') {
            setWednesday('border-2 border-accent main-row')
        }
        else if (day === "Thursday") {
            setThursday('border-2 border-accent main-row')
        }
    }, [day])


    return (
        <div className='container mx-auto mt-5 px-3'>
            <Download />
            <h1 className='text-center text-[25px]  lg:text-2xl text-primary font-bold mb-2'>Rutine class 11</h1>
            <h1 className='text-center text-[25px]  lg:text-2xl text-primary font-bold mb-2'>(Humanities)</h1>
            <h1 className='text-center text-xl lg:text-2xl mb-5'>{date}</h1>
            <div className="overflow-x-auto overflow-y-auto w-full shadow-lg p-1 border">
                <table className="table w-full table-rutine h-full ">
                    {/* head */}
                    <thead>
                        <tr className='border-2 border-[#0436a1]'>
                            <th >
                                <span className='font-bold text-[15px]'>Day</span>
                                <br />
                                <span className='text-neutral'>{day}</span>
                            </th>
                            <th>09 - 09.50</th>
                            <th>9.50 - 10.40</th>
                            <th>10.40 - 11.30</th>
                            <th>11.30 - 12.20</th>
                            <th>12.20 - 01.10</th>
                            <th className='text-red-400 text-[15px]'>Gap - 10 Min</th>
                            <th>01.20 - 2.15</th>
                            <th>01.20 - 3.50</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* First Row  */}
                        {/* First Row  */}
                        {/* First Row  */}
                        <tr className={`${sunday}`}>
                            <td className={'date-name'}>
                                <div className="flex justify-center items-center space-x-3">
                                    <div>
                                        <div className="font-bold text-center">Sun Day</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Bangla 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">Soma Devnath</span>
                            </td>
                            <td>
                                English 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Sisir Das
                                </span>
                            </td>
                            <td>
                                Civic
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Nahid Salma
                                </span>
                            </td>
                            <td>
                                I.C.T
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Gobinda pal
                                </span>
                            </td>
                            <td>
                                Islamic His. 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Suborna Akhter
                                </span>
                            </td>

                            <td className='text-red-400 text-[20px]'>GAP</td>
                            <td>
                                Social Work
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Kazi Laily
                                </span>
                            </td>
                            <td>
                                Islamic Study. 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Habibur Rahman
                                </span>
                            </td>
                        </tr>

                        {/* Second Row  */}
                        {/* Second Row  */}
                        {/* Second Row  */}

                        <tr className={`${monday}`}>
                            <td className={'date-name'}>
                                <div className="flex justify-center items-center space-x-3">
                                    <div>
                                        <div className="font-bold">Mon Day</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Social Work 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">Kazi Laily</span>
                            </td>
                            <td>
                                Islamic Study. 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Habibur Rahman
                                </span>
                            </td>
                            <td>
                                Bangla 2nd
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Momtaj
                                </span>
                            </td>
                            <td>
                                English 2nd
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Jahid Sir
                                </span>
                            </td>
                            <td>
                                Civis 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Mahmuz Sir
                                </span>
                            </td>

                            <td className='text-red-400 text-[20px]'>GAP</td>
                            <td>
                                Islamic His. 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Suborna Akhter
                                </span>
                            </td>
                            <td>
                                No Class !
                            </td>
                        </tr>

                        {/* Third Row  */}
                        {/* Third Row  */}
                        {/* Third Row  */}

                        <tr className={`${tuesday}`}>
                            <td className={'date-name'}>
                                <div className="flex justify-center items-center space-x-3">
                                    <div>
                                        <div className="font-bold">Tues Day</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Islamic His.
                                <br />
                                <span className="badge badge-ghost badge-sm">Kawser</span>
                            </td>
                            <td>
                                I.C.T
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Gobinda pal
                                </span>
                            </td>
                            <td>
                                English 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Sisir Das
                                </span>
                            </td>
                            <td>
                                Bangla 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Momtaj
                                </span>
                            </td>
                            <td>
                                Civis
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Mahmud Sir
                                </span>
                            </td>

                            <td className='text-red-400 text-[20px]'>GAP</td>
                            <td>
                                Social Work 2nd
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Jahanara Beguma
                                </span>
                            </td>
                            <td>
                                Islamic Study 2nd
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Abul Kashem
                                </span>
                            </td>

                        </tr>

                        {/* 4th Row  */}
                        {/* 4th Row  */}
                        {/* 4th Row  */}

                        <tr className={`${wednesday}`}>
                            <td className={'date-name'}>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">Wednes day</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Social Work
                                <br />
                                <span className="badge badge-ghost badge-sm">Jahanara Begum</span>
                            </td>
                            <td>
                                Civis
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Kamrun Nahar (Rumi)
                                </span>
                            </td>
                            <td>
                                I.C.T
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Gobinda Pal
                                </span>
                            </td>
                            <td>
                                English 2nd
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    jahed Sir
                                </span>
                            </td>
                            <td>
                                Islamic Study. 2nd
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Abul Kashem
                                </span>
                            </td>

                            <td className='text-red-400 text-[20px]'>GAP</td>
                            <td>
                                Islamic History
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Kawser
                                </span>
                            </td>
                            <td>
                                Bangla 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Soma Devnath
                                </span>
                            </td>

                        </tr>

                        {/* 5th Row  */}
                        {/* 5th Row  */}
                        {/* 5th Row  */}

                        <tr className={`${Thursday}`}>
                            <td className={'date-name'}>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">Thurs day</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Inslamic Study 2nd
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Abul Kashem
                                </span>
                            </td>
                            <td>
                                Islamic His. 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Suborna Akhter
                                </span>
                            </td>
                            <td>
                                Civis 2nd
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Sisir Sorkar
                                </span>
                            </td>
                            <td>
                                Social Work 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Kazi Laily
                                </span>
                            </td>
                            <td>
                                English 1st
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Sisir Das
                                </span>
                            </td>

                            <td className='text-red-400 text-[20px]'>GAP</td>
                            <td>
                                Bangla 2nd
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Soma Devnath
                                </span>
                            </td>
                            <td>
                                No Class !
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Me
                                </span>
                            </td>
                        </tr>
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>

                        </tr>
                    </tfoot>
                </table>
            </div>



        </div>
    )
}

export default Humanitys
