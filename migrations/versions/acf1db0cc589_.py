"""empty message

Revision ID: acf1db0cc589
Revises: d1e0e3ada1d0
Create Date: 2023-10-19 14:30:03.194214

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'acf1db0cc589'
down_revision = 'd1e0e3ada1d0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=30),
               type_=sa.String(length=150),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.String(length=150),
               type_=sa.VARCHAR(length=30),
               existing_nullable=False)

    # ### end Alembic commands ###
