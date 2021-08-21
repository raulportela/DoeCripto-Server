import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";

export class Donations1628040427482 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "donations",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "isAnonymousDonation",
            type: "boolean",
            default: false,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "quantityCoin",
            type: "number",
          },
          {
            name: "institution_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKInstitution",
            referencedTableName: "institutions",
            referencedColumnNames: ["id"],
            columnNames: ["institution_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("donations");
  }
}
