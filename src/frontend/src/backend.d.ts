import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    id: bigint;
    name: string;
    message: string;
    timestamp: bigint;
    phone: string;
    location: string;
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getEnquiry(id: bigint): Promise<Enquiry | null>;
    submitEnquiry(name: string, phone: string, location: string, message: string, timestamp: bigint): Promise<bigint>;
}
