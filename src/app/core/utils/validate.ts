import { AbstractControl } from "@angular/forms";

export class Validate {
    static maiorDeIdade(data: AbstractControl) {
        if(data.value==null || data.value==undefined)
        {
            return null;
        }
        const birt: string = data.value;
        const [ano, mes, dia] = birt.split('-');
        const today = new Date()
        const birtDate = new Date(parseInt(ano,10), parseInt(mes,10)-1, parseInt(dia,10), 0, 0, 0);
        const dataMinor = today.setFullYear(today.getFullYear()-18, today.getMonth(), today.getDate())
        const dataLarger= today.setFullYear(today.getFullYear()-92, today.getMonth(), today.getDate())
        const birtParse: number = Date.parse(birtDate.toString())

        if (birtParse < dataMinor && birtParse > dataLarger){
            return null;
        }

        return { minor: true};
    }

}
