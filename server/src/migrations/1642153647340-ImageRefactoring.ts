import { MigrationInterface, QueryRunner } from 'typeorm'

export class ImageRefactoring1642153647340 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/*sql*/ `
            CREATE OR REPLACE FUNCTION alt_default_to_name()
                RETURNS TRIGGER 
                LANGUAGE PLPGSQL
                AS
            $$
            BEGIN
                NEW.alt_text := NEW.name;

                RETURN NEW;
            END;
            $$;

            CREATE TRIGGER alt_default_to_name_trigger
                BEFORE INSERT
                ON "image"
                FOR EACH ROW
                WHEN (NEW.alt_text IS NULL)
                EXECUTE PROCEDURE alt_default_to_name();
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/*sql*/ `
            DROP TRIGGER IF EXISTS alt_default_to_name_trigger ON "image";

            DROP FUNCTION IF EXISTS alt_default_to_name();
        `)
  }
}
