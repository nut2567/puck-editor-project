import { DefaultComponentProps, DefaultRootFieldProps } from "@measured/puck";

export type WithId<Props> = Props & {
  id: string;
};

export type AsFieldProps<Props> = Omit<Props, "children" | "puck" | "editMode">;

export type BaseData<
  Props extends { [key: string]: any } = { [key: string]: any }
> = {
  readOnly?: Partial<Record<keyof Props, boolean>>;
};

export type RootDataWithProps<
  Props extends DefaultComponentProps = DefaultRootFieldProps
> = BaseData<Props> & {
  props: Props;
};

// DEPRECATED
export type RootDataWithoutProps<
  Props extends DefaultComponentProps = DefaultRootFieldProps
> = Props;

export type RootData<
  Props extends DefaultComponentProps = DefaultRootFieldProps
> = Partial<RootDataWithProps<AsFieldProps<Props>>> &
  Partial<RootDataWithoutProps<Props>>; // DEPRECATED

export type ComponentData<
  Props extends DefaultComponentProps = DefaultComponentProps,
  Name = string
> = {
  type: Name;
  props: WithId<Props>;
} & BaseData<Props>;

// Backwards compatibility
export type MappedItem = ComponentData;

export type ComponentDataMap<
  Props extends Record<string, DefaultComponentProps> = DefaultComponentProps
> = {
  [K in keyof Props]: ComponentData<Props[K], K extends string ? K : never>;
}[keyof Props];

export type Content<
  PropsMap extends { [key: string]: any } = { [key: string]: any }
> = ComponentDataMap<PropsMap>[];

export type Data<
  Props extends DefaultComponentProps = DefaultComponentProps,
  RootProps extends DefaultComponentProps = DefaultRootFieldProps
> = {
  root: RootData<RootProps>;
  content: Content<Props>;
  zones?: Record<string, Content<Props>>;
};

export type ComponentDataOptionalId<
  Props extends DefaultComponentProps = DefaultComponentProps,
  Name = string
> = {
  type: Name;
  props: Props & {
    id?: string;
  };
} & BaseData<Props>;

export type Slot<
  Props extends { [key: string]: DefaultComponentProps } = {
    [key: string]: DefaultComponentProps;
  }
> = {
  [K in keyof Props]: ComponentDataOptionalId<
    Props[K],
    K extends string ? K : never
  >;
}[keyof Props][];

export type Metadata = { [key: string]: any };
