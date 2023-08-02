export class Event {
    
    id!: number;
    name!: string;
    options!: string;
    description!:string;
    start_date!:Date;
    end_date!:Date;
    location!:string;
    category!:string;
    attendee_limit!:number;
    registration_deadline!:Date;
    fee!:number;
    organizer!:string;
    contact_person!:string;
    contact_email!:string;
}