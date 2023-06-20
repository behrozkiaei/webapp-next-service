import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Link from 'next/link';

export default function MenuItemsList() {
    return (
        <div className="d-flex full-width flex-column justify-start">
            <div className='d-flex full-width justify-start align-center' >
                <ListItemIcon>
                    <ReceiptIcon />
                </ListItemIcon>
                <Link    href={`/datatables/transactions`} >
                <p >لیست تراکنش ها</p>
                </Link>
            </div>
            <div className='d-flex full-width justify-start align-center'>
                <ListItemIcon>
                    <ReceiptIcon />
                </ListItemIcon>
                <Link    href={`/datatables/order`} >
                <p>لیست درخواست های من</p>
                </Link>
            </div>
        </div>
    );
}
