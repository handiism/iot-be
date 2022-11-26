-- CreateTable
CREATE TABLE "Lamp" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lamp_pkey" PRIMARY KEY ("id")
);
