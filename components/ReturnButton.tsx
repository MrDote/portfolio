import Link from 'next/link';
import { HiChevronDoubleUp } from 'react-icons/hi';
import paths from '../paths';

function ReturnButton() {
    return (
        <div className="mx-auto flex justify-center -mt-7">
            <Link href={paths.about}>
                <HiChevronDoubleUp size='55' className='bg-red-400 text-white p-2' />
            </Link>
        </div>
    )
}

export default ReturnButton