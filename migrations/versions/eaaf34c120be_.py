"""empty message

Revision ID: eaaf34c120be
Revises: 96191562a9fa
Create Date: 2023-11-15 04:02:56.812146

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'eaaf34c120be'
down_revision = '96191562a9fa'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorite_back')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('favorite_back',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('favorite_back', sa.VARCHAR(length=300), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='favorite_back_pkey')
    )
    # ### end Alembic commands ###