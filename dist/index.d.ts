import { OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
export declare class NameInitialsComponent implements ViewCell, OnInit {
    rowData: any;
    value: string;
    iniciais: string;
    ngOnInit(): void;
    getNameInitials(nomeCompleto: string): string;
}