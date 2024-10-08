PGDMP             	        
    y            postgres    12.2    12.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    13318    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_India.1252' LC_CTYPE = 'English_India.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    2843                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                       0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    1                        3079    16563 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false                       0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    3            �            1259    27204    typeorm_metadata    TABLE     �   CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);
 $   DROP TABLE public.typeorm_metadata;
       public         heap    postgres    false            �            1259    27210    users    TABLE     W  CREATE TABLE public.users (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "firstName" text,
    "lastName" text,
    "profileImage" text,
    email text NOT NULL,
    password text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false    3                      0    27204    typeorm_metadata 
   TABLE DATA           X   COPY public.typeorm_metadata (type, database, schema, "table", name, value) FROM stdin;
    public          postgres    false    204   �                 0    27210    users 
   TABLE DATA           w   COPY public.users (id, "createdAt", "updatedAt", "firstName", "lastName", "profileImage", email, password) FROM stdin;
    public          postgres    false    205   �       �
           2606    27220 $   users PK_a3ffb1c0c8416b9fc6f907b7433 
   CONSTRAINT     d   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433";
       public            postgres    false    205            �
           2606    27222 $   users UQ_97672ac88f789774dd47f7c8be3 
   CONSTRAINT     b   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3";
       public            postgres    false    205                  x������ � �         |  x�}�Ko�@���+�`;�o�3^5�jS9`D�Z��3c�%�>H�%U���9��+T��č�����]I�c
�F��L<"3C���IF�aBA<�}���0�>pݹ���!"�&Bŀi�{��mK�WM����`F���*^��iȴez̦l�7�I2����0��`jN��o�}U�_��sJ!�E�(%*x.�"gV�ݧ92�s)��_����A<6E�]���5���g�K��[xE��+�8�\O��e;�S���aNZaw>�C���t �1,��m8 ��A�
�
i	E)�)��y*"
+��f_�E���mw�Gf�9{�WO^��q���t������-��]7G�'�L����)��O��+���'�     