/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";

import { Button, Card, Menu, MenuDivider, MenuItem, Popover } from "@blueprintjs/core";
import { Example, type ExampleProps } from "@blueprintjs/docs-theme";

export class DropdownMenuExample extends React.PureComponent<ExampleProps> {
    public render() {
        const exampleMenu = (
            <Menu>
                <MenuItem icon="graph" text="Graph" />
                <MenuItem icon="map" text="Map" />
                <MenuItem icon="th" text="Table" shouldDismissPopover={false} />
                <MenuItem icon="zoom-to-fit" text="Browser" disabled={true} />
                <MenuDivider />
                <MenuItem icon="cog" text="Settings...">
                    <MenuItem icon="add" text="Add new application" disabled={true} />
                    <MenuItem icon="remove" text="Remove application" />
                </MenuItem>
            </Menu>
        );
        return (
            <Example options={false} {...this.props}>
                <Card style={{ width: 250 }}>
                    <Popover content={exampleMenu} fill={true} placement="bottom">
                        <Button
                            alignText="left"
                            fill={true}
                            icon="applications"
                            rightIcon="caret-down"
                            text="Open with..."
                        />
                    </Popover>
                </Card>
            </Example>
        );
    }
}
