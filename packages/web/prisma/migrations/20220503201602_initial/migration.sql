-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "discordId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "damage" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deed" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "equipped" BOOLEAN NOT NULL,

    CONSTRAINT "Deed_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Deed" ADD CONSTRAINT "Deed_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deed" ADD CONSTRAINT "Deed_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
