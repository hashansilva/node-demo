export class NetworkUtils{
    public static wrap(status: number, data: any[]):ResponseWrapper{
        return {status:status, data:data};
    }
}