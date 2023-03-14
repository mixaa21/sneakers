import { MigrationInterface, QueryRunner } from "typeorm"
import dataSource from "../dataSource";
import {Sizes} from "../entities/Sizes";

export class gen1678804481220 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await dataSource.createQueryBuilder()
            .insert()
            .into(Sizes)
            .values([
                {
                    ruSize: '34.5',
                    usSize: '3.5',
                    ukSize: '3',
                    euSize: '35.5',
                    cmSize: '22.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '35',
                    usSize: '4',
                    ukSize: '3.5',
                    euSize: '36',
                    cmSize: '23',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '35.5',
                    usSize: '4.5',
                    ukSize: '4',
                    euSize: '36.5',
                    cmSize: '23.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '36.5',
                    usSize: '5',
                    ukSize: '4.5',
                    euSize: '37.5',
                    cmSize: '23.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '37',
                    usSize: '5.5',
                    ukSize: '5',
                    euSize: '38',
                    cmSize: '24',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '37.5',
                    usSize: '6',
                    ukSize: '5.5',
                    euSize: '38.5',
                    cmSize: '24',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '38',
                    usSize: '6.5',
                    ukSize: '6',
                    euSize: '39',
                    cmSize: '24.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '39',
                    usSize: '7',
                    ukSize: '6',
                    euSize: '40',
                    cmSize: '25',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '39.5',
                    usSize: '7.5',
                    ukSize: '6.5',
                    euSize: '40.5',
                    cmSize: '25.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '40',
                    usSize: '8',
                    ukSize: '7',
                    euSize: '41',
                    cmSize: '26',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '41',
                    usSize: '8.5',
                    ukSize: '7.5',
                    euSize: '42',
                    cmSize: '26.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '41.5',
                    usSize: '9',
                    ukSize: '8',
                    euSize: '42.5',
                    cmSize: '27',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '42',
                    usSize: '9.5',
                    ukSize: '8.5',
                    euSize: '43',
                    cmSize: '27.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '43',
                    usSize: '10',
                    ukSize: '9',
                    euSize: '44',
                    cmSize: '28',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '43.5',
                    usSize: '10.5',
                    ukSize: '9.5',
                    euSize: '44.5',
                    cmSize: '28.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '44',
                    usSize: '11',
                    ukSize: '10',
                    euSize: '45',
                    cmSize: '29',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '44.5',
                    usSize: '11.5',
                    ukSize: '10.5',
                    euSize: '45.5',
                    cmSize: '29.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '45',
                    usSize: '12',
                    ukSize: '11',
                    euSize: '46',
                    cmSize: '30',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '46',
                    usSize: '12.5',
                    ukSize: '11.5',
                    euSize: '47',
                    cmSize: '30.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '46.5',
                    usSize: '13',
                    ukSize: '12',
                    euSize: '47.5',
                    cmSize: '31',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '47',
                    usSize: '13.5',
                    ukSize: '12.5',
                    euSize: '48',
                    cmSize: '31.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '47.5',
                    usSize: '14',
                    ukSize: '13',
                    euSize: '48.5',
                    cmSize: '32',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '48',
                    usSize: '14.5',
                    ukSize: '13.5',
                    euSize: '49',
                    cmSize: '32.5',
                    gender: 'm',
                    fBrand: ()=>'1'
                },
                {
                    ruSize: '48.5',
                    usSize: '15',
                    ukSize: '14',
                    euSize: '49.5',
                    cmSize: '33',
                    gender: 'm',
                    fBrand: ()=>'1'
                },

            ]).execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
