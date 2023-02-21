import Link from 'next/link';
import { HiChevronDoubleUp } from 'react-icons/hi';
import paths from '../paths';

function ReturnButton() {
    return (
        <div className="flex justify-center -mt-7">
            <Link href={paths.about}>
                <HiChevronDoubleUp size='55' className='bg-red-400 dark:bg-red-500 text-white p-2' />
            </Link>
        </div>
    )
}

export default ReturnButton